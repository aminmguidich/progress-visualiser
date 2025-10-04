interface AnalysisResult {
  success: boolean;
  data?: {
    text: string;
    sources: Array<{ uri: string; title: string }>;
  };
  error?: string;
}

async function retryWithExponentialBackoff<T>(
  fn: () => Promise<T>,
  maxRetries = 5
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error('Max retries exceeded');
}

export async function analyzeRemainingEffort(percentageRemaining: number): Promise<AnalysisResult> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

  if (!apiKey) {
    return {
      success: false,
      error: 'API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.'
    };
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const userQuery = `You are a project manager and motivational coach. A project is ${percentageRemaining.toFixed(2)}% remaining. Give me a highly motivational and contextual analysis comparing this remaining percentage to a real-world distance or challenge. Use relatable examples like running a marathon, climbing a mountain, reading a book, or completing a journey. Provide a concise, encouraging single-paragraph response.`;

  const payload = {
    contents: [{ 
      parts: [{ text: userQuery }] 
    }]
  };

  try {
    const fetchFn = async () => {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }

      return response.json();
    };

    const result = await retryWithExponentialBackoff(fetchFn);
    const candidate = result.candidates?.[0];

    if (candidate && candidate.content?.parts?.[0]?.text) {
      const text = candidate.content.parts[0].text;
      
      return {
        success: true,
        data: { 
          text, 
          sources: [] // No sources since we're not using Google Search
        }
      };
    } else {
      return {
        success: false,
        error: 'No content generated from the API.'
      };
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Check for specific API key errors
    if (error instanceof Error) {
      if (error.message.includes('API key not valid')) {
        return {
          success: false,
          error: 'Invalid API key. Please check your VITE_GEMINI_API_KEY in the .env file and ensure it\'s a valid Gemini API key.'
        };
      }
      
      if (error.message.includes('API key expired')) {
        return {
          success: false,
          error: 'Your API key has expired. Please create a new API key at https://aistudio.google.com/app/apikey and update your .env file.'
        };
      }
    }
    
    return {
      success: false,
      error: 'An error occurred while fetching the analysis. Please try again.'
    };
  }
}
