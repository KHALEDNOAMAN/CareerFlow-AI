import { useState, useCallback } from 'react';
import SkillTag from '../components/SkillTag';
import { UploadCloud } from 'lucide-react';

export default function CVUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [skills, setSkills] = useState<string[]>([]);
  const [experience, setExperience] = useState<any[]>([]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      simulateUpload(e.dataTransfer.files[0]);
    }
  }, []);

  const simulateUpload = (file: File) => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setSkills(['React', 'TypeScript', 'Node.js', 'Python', 'SQL']);
        setExperience([
          { role: 'Frontend Developer', company: 'Tech Corp', years: '2021 - Present' },
          { role: 'Junior Web Dev', company: 'Startup Inc', years: '2019 - 2021' }
        ]);
      }
    }, 200);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My CV</h1>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-12 text-center ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <UploadCloud className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-600">Drag and drop your PDF CV here, or</p>
        <button className="mt-2 text-blue-600 font-medium hover:text-blue-500">
          browse files
        </button>
      </div>

      {progress > 0 && progress < 100 && (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {skills.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-lg font-medium mb-4">Extracted Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <SkillTag key={skill} skill={skill} type="match" />
            ))}
          </div>
        </div>
      )}

      {experience.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-lg font-medium mb-4">Experience Timeline</h2>
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <div key={i} className="border-l-2 border-blue-500 pl-4 py-2">
                <h3 className="font-medium text-gray-900">{exp.role}</h3>
                <p className="text-gray-600">{exp.company} • {exp.years}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
