import { useState } from 'react';
import MatchScoreCircle from '../components/MatchScoreCircle';
import SkillTag from '../components/SkillTag';

export default function Analysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult({
        score: 78,
        matched: ['React', 'TypeScript', 'Tailwind', 'Git'],
        missing: ['GraphQL', 'Next.js', 'Jest'],
        suggestions: [
          "Highlight your experience with state management more prominently.",
          "Add a specific bullet point about testing methodologies to cover the Jest requirement.",
          "Consider building a small side project with GraphQL to quickly fill that gap."
        ]
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Job Match Analysis</h1>
      
      {!result ? (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-600 mb-6">Select a job and a CV to run the AI match analysis.</p>
          <button 
            onClick={runAnalysis}
            disabled={isAnalyzing}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {isAnalyzing ? 'Analyzing...' : 'Run Analysis'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Match Score</h3>
            <MatchScoreCircle score={result.score} size={160} strokeWidth={12} />
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Skills Analysis</h3>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Matched Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {result.matched.map((s: string) => <SkillTag key={s} skill={s} type="match" />)}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Missing Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {result.missing.map((s: string) => <SkillTag key={s} skill={s} type="missing" />)}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-800 mb-4">AI Suggestions</h3>
              <ul className="space-y-3">
                {result.suggestions.map((s: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
