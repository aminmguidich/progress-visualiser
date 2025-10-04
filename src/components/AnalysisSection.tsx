import { Loader2, Sparkles, ExternalLink } from 'lucide-react';

interface AnalysisSectionProps {
  analysis: { text: string; sources: Array<{ uri: string; title: string }> } | null;
  isAnalyzing: boolean;
}

function AnalysisSection({ analysis, isAnalyzing }: AnalysisSectionProps) {
  return (
    <div className="mt-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-orange-200 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-orange-600" />
        <h3 className="text-lg font-bold text-orange-800">
          AI Motivation & Context
        </h3>
      </div>

      {isAnalyzing ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 text-orange-600 animate-spin mr-3" />
          <span className="text-orange-700 font-medium">Generating motivational analysis...</span>
        </div>
      ) : analysis ? (
        <>
          <div className="text-slate-700 leading-relaxed mb-4">
            <p>{analysis.text}</p>
          </div>

          {analysis.sources && analysis.sources.length > 0 && (
            <div className="pt-4 border-t border-orange-200">
              <p className="text-xs font-semibold text-slate-600 mb-2">
                Sources:
              </p>
              <div className="space-y-2">
                {analysis.sources.map((source, index) => (
                  <a
                    key={index}
                    href={source.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 hover:underline group"
                  >
                    <ExternalLink className="w-3 h-3 group-hover:scale-110 transition-transform" />
                    <span className="line-clamp-1">{source.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}

export default AnalysisSection;
