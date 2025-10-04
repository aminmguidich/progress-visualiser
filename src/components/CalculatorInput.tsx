import { Calculator } from 'lucide-react';

interface CalculatorInputProps {
  numerator: string;
  denominator: string;
  onNumeratorChange: (value: string) => void;
  onDenominatorChange: (value: string) => void;
  onCalculate: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

function CalculatorInput({
  numerator,
  denominator,
  onNumeratorChange,
  onDenominatorChange,
  onCalculate,
  onKeyPress
}: CalculatorInputProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
        <div>
          <label htmlFor="numerator" className="block text-sm font-medium text-slate-700 mb-2">
            Completed Amount
          </label>
          <input
            type="number"
            id="numerator"
            value={numerator}
            onChange={(e) => onNumeratorChange(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="0"
            className="w-full p-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
          />
        </div>

        <div className="text-4xl font-bold text-slate-400 mt-6">/</div>

        <div>
          <label htmlFor="denominator" className="block text-sm font-medium text-slate-700 mb-2">
            Total Goal
          </label>
          <input
            type="number"
            id="denominator"
            value={denominator}
            onChange={(e) => onDenominatorChange(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="0"
            className="w-full p-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
          />
        </div>
      </div>

      <button
        onClick={onCalculate}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        Calculate Progress
      </button>
    </div>
  );
}

export default CalculatorInput;
