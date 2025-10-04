# Progress Completion Visualizer

A modern, beautiful web application that helps you visualize your progress toward goals and provides AI-powered motivational insights using Google's Gemini API.

![Progress Completion Visualizer](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.4.2-purple) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.1-cyan)

## Features

- **Interactive Progress Tracking**: Calculate completion percentages by entering completed amount and total goal
- **Visual Progress Bar**: Dynamic, color-coded progress visualization that changes based on completion level
- **AI-Powered Insights**: Get motivational analysis and real-world comparisons for your remaining work using Gemini API with Google Search
- **Beautiful UI**: Modern, responsive design with smooth animations and transitions
- **Real-time Validation**: Smart input validation with helpful error messages
- **Mobile Responsive**: Works seamlessly on all device sizes

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons
- **Google Gemini API** - AI-powered analysis with grounded search results

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/progress-visualizer.git
cd progress-visualizer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your Gemini API key to `.env`:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Enter Your Progress**: Input the completed amount (numerator) and total goal (denominator)
2. **Calculate**: Click "Calculate Progress" or press Enter to see your progress
3. **Visualize**: View your progress with a dynamic color-coded progress bar
4. **Get Motivated**: Click "Analyze Remaining Effort" to receive AI-powered motivational insights with real-world comparisons

### Example Scenarios

- **Project Tasks**: 45 completed tasks out of 100 total = 45% complete
- **Reading Progress**: 250 pages read out of 500 total = 50% complete
- **Fitness Goals**: 15 workouts done out of 30 planned = 50% complete
- **Learning Progress**: 8 chapters studied out of 12 total = 66.67% complete

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run typecheck # Type check with TypeScript
```

## Project Structure

```
src/
├── components/
│   ├── AnalysisSection.tsx      # AI analysis display component
│   ├── CalculatorInput.tsx      # Input form component
│   ├── PercentageCalculator.tsx # Main calculator logic
│   └── ProgressDisplay.tsx      # Progress visualization component
├── services/
│   └── geminiService.ts         # Gemini API integration
├── App.tsx                       # Root component
├── main.tsx                      # Application entry point
└── index.css                     # Global styles
```

## Features in Detail

### Smart Progress Calculation
- Handles edge cases (division by zero, negative numbers, exceeding goals)
- Color-coded progress bars (red < 33%, yellow < 67%, green ≥ 67%)
- Precise percentage calculations with two decimal places

### AI-Powered Analysis
- Uses Google's Gemini 2.0 Flash model with grounded search
- Provides real-world comparisons and motivational context
- Shows sources for grounded information
- Automatic retry logic with exponential backoff for reliability

### Beautiful Design
- Clean, modern interface with smooth animations
- Responsive design that works on all devices
- Accessible color contrasts and intuitive interactions
- Professional gradient backgrounds and shadows

## API Configuration

This app uses the Google Gemini API for AI-powered analysis. The API:
- Requires a valid API key (free tier available)
- Uses grounded search for accurate real-world comparisons
- Implements retry logic for reliability
- Provides cited sources for transparency

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspired by modern web design principles
- Icons by [Lucide](https://lucide.dev)
- AI powered by [Google Gemini](https://ai.google.dev)

## Support

If you find this project helpful, please give it a star on GitHub!

---

Made with ❤️ using React, TypeScript, and Gemini AI
