import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import CalculatorInput from './CalculatorInput';
import ProgressDisplay from './ProgressDisplay';
import AnalysisSection from './AnalysisSection';
import { analyzeRemainingEffort } from '../services/geminiService';

function PercentageCalculator() {
  const [numerator, setNumerator] = useState<string>('');
  const [denominator, setDenominator] = useState<string>('');
  const [percentageCompleted, setPercentageCompleted] = useState<number | null>(null);
  const [percentageRemaining, setPercentageRemaining] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [analysis, setAnalysis] = useState<{ text: string; sources: Array<{ uri: string; title: string }> } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const calculatePercentage = () => {
    setError('');
    setAnalysis(null);
    setPercentageCompleted(null);
    setPercentageRemaining(null);

    const num = parseFloat(numerator);
    const denom = parseFloat(denominator);

    if (isNaN(num) || isNaN(denom)) {
      setError('Please enter valid numbers for both fields.');
      return;
    }

    if (denom <= 0) {
      setError('The total goal (denominator) must be a positive number.');
      return;
    }

    if (num < 0) {
      setError('The completed amount (numerator) cannot be negative.');
      return;
    }

    if (num > denom) {
      setError('Warning: Completed amount is greater than the total goal!');
    }

    const rawPercentageCompleted = (num / denom) * 100;
    const completed = Math.min(100, Math.max(0, rawPercentageCompleted));
    const remaining = 100 - completed;

    setPercentageCompleted(completed);
    setPercentageRemaining(remaining);
  };

  const handleAnalyze = async () => {
    if (percentageRemaining === null) return;

    setIsAnalyzing(true);
    setAnalysis(null);

    const result = await analyzeRemainingEffort(percentageRemaining);

    if (result.success && result.data) {
      setAnalysis(result.data);
    } else {
      setAnalysis({
        text: result.error || 'An error occurred while fetching the analysis.',
        sources: []
      });
    }

    setIsAnalyzing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculatePercentage();
    }
  };

  return (
    <div className={`transition-all duration-500 ${(analysis || isAnalyzing) ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'max-w-2xl mx-auto'}`}>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <CalculatorInput
            numerator={numerator}
            denominator={denominator}
            onNumeratorChange={setNumerator}
            onDenominatorChange={setDenominator}
            onCalculate={calculatePercentage}
            onKeyPress={handleKeyPress}
          />

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-600 text-sm font-medium text-center">{error}</p>
            </div>
          )}

          {percentageCompleted !== null && percentageRemaining !== null && (
            <>
              <ProgressDisplay
                percentageCompleted={percentageCompleted}
                percentageRemaining={percentageRemaining}
              />

              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                {isAnalyzing ? (
                  <span>Analyzing Remaining Effort...</span>
                ) : (
                  <span>Analyze Remaining Effort ({percentageRemaining.toFixed(2)}% Left)</span>
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {(analysis || isAnalyzing) && (
        <div className="lg:flex lg:items-start">
          <AnalysisSection
            analysis={analysis}
            isAnalyzing={isAnalyzing}
          />
        </div>
      )}
    </div>
  );
}

export default PercentageCalculator;
