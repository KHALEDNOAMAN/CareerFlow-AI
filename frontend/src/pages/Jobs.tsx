import { useState } from 'react';

type JobStatus = 'Saved' | 'Applied' | 'Interview' | 'Offer' | 'Rejected';

interface Job {
  id: string;
  title: string;
  company: string;
  status: JobStatus;
  score: number;
}

const initialJobs: Job[] = [
  { id: '1', title: 'Senior React Engineer', company: 'Vercel', status: 'Applied', score: 85 },
  { id: '2', title: 'Frontend Developer', company: 'Stripe', status: 'Interview', score: 92 },
  { id: '3', title: 'Fullstack Dev', company: 'Local Startup', status: 'Saved', score: 65 },
];

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [filter, setFilter] = useState<JobStatus | 'All'>('All');

  const getStatusColor = (status: JobStatus) => {
    switch (status) {
      case 'Saved': return 'bg-gray-100 text-gray-800';
      case 'Applied': return 'bg-blue-100 text-blue-800';
      case 'Interview': return 'bg-purple-100 text-purple-800';
      case 'Offer': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100';
    }
  };

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(j => j.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Job Applications</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Job
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex items-center space-x-4">
          <span className="text-gray-500 font-medium">Filter:</span>
          {['All', 'Saved', 'Applied', 'Interview', 'Offer', 'Rejected'].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s as any)}
              className={`px-3 py-1 rounded-full text-sm ${filter === s ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="divide-y">
          {filteredJobs.map(job => (
            <div key={job.id} className="p-4 hover:bg-gray-50 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <span className="text-xs text-gray-500 block">Match Score</span>
                  <span className={`font-bold ${job.score > 80 ? 'text-green-600' : 'text-yellow-600'}`}>
                    {job.score}%
                  </span>
                </div>
                
                <select 
                  value={job.status}
                  onChange={(e) => {
                    setJobs(jobs.map(j => j.id === job.id ? { ...j, status: e.target.value as JobStatus } : j));
                  }}
                  className={`text-sm font-medium rounded-full px-3 py-1 border-none focus:ring-0 cursor-pointer ${getStatusColor(job.status)}`}
                >
                  <option value="Saved">Saved</option>
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
