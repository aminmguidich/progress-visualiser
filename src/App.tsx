import { useState } from 'react';
import { Calculator } from 'lucide-react';
import PercentageCalculator from './components/PercentageCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Progress Completion Visualizer
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Track your progress and get AI-powered motivational insights on your remaining goals
          </p>
        </div>
        <PercentageCalculator />
      </div>
    </div>
  );
}

export default App;
