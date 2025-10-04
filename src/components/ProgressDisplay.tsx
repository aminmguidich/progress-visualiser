import { CheckCircle2 } from 'lucide-react';

interface ProgressDisplayProps {
  percentageCompleted: number;
  percentageRemaining: number;
}

function ProgressDisplay({ percentageCompleted, percentageRemaining }: ProgressDisplayProps) {
  const getProgressColor = () => {
    if (percentageCompleted < 33) return 'bg-red-500';
    if (percentageCompleted < 67) return 'bg-yellow-500';
    return 'bg-emerald-500';
  };

  const getProgressGradient = () => {
    if (percentageCompleted < 33) return 'from-red-500 to-red-600';
    if (percentageCompleted < 67) return 'from-yellow-500 to-yellow-600';
    return 'from-emerald-500 to-emerald-600';
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-700 mb-1">Progress Status</h2>
          <p className="text-3xl font-bold text-blue-600">
            {percentageCompleted.toFixed(2)}%
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600 mb-1">Remaining</p>
          <p className="text-2xl font-bold text-slate-700">
            {percentageRemaining.toFixed(2)}%
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden shadow-inner">
          <div
            className={`h-6 transition-all duration-700 ease-out bg-gradient-to-r ${getProgressGradient()} shadow-lg`}
            style={{ width: `${percentageCompleted}%` }}
          />
        </div>
        {percentageCompleted === 100 && (
          <div className="absolute -top-1 right-0 transform translate-x-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-500 drop-shadow-lg" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
        <div className="text-center p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-slate-600 mb-1">Completed</p>
          <p className="text-2xl font-bold text-blue-600">{percentageCompleted.toFixed(1)}%</p>
        </div>
        <div className="text-center p-4 bg-slate-50 rounded-xl">
          <p className="text-sm text-slate-600 mb-1">Left to go</p>
          <p className="text-2xl font-bold text-slate-700">{percentageRemaining.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressDisplay;
