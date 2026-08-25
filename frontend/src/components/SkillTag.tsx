interface SkillTagProps {
  skill: string;
  type: 'match' | 'missing' | 'neutral';
}

export default function SkillTag({ skill, type }: SkillTagProps) {
  let colors = 'bg-gray-100 text-gray-800';
  
  if (type === 'match') {
    colors = 'bg-green-100 text-green-800 border-green-200';
  } else if (type === 'missing') {
    colors = 'bg-red-100 text-red-800 border-red-200';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors}`}>
      {skill}
    </span>
  );
}
