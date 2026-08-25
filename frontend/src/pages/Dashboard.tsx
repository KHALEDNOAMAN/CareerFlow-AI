import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import api from '../lib/api';

const matchData = [
  { name: 'Mon', score: 65 },
  { name: 'Tue', score: 72 },
  { name: 'Wed', score: 85 },
  { name: 'Thu', score: 78 },
  { name: 'Fri', score: 90 },
];

const statusData = [
  { name: 'Saved', value: 12 },
  { name: 'Applied', value: 8 },
  { name: 'Interview', value: 3 },
  { name: 'Rejected', value: 4 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Dashboard() {
  const [stats, setStats] = useState({ totalJobs: 0, avgMatch: 0, applied: 0, interviews: 0 });

  useEffect(() => {
    // Mock fetch
    setStats({ totalJobs: 27, avgMatch: 78, applied: 15, interviews: 3 });
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Jobs</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalJobs}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Avg Match Score</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stats.avgMatch}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Applications Sent</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{stats.applied}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Interviews</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">{stats.interviews}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Match Scores</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={matchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Application Status</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Skill Gap Overview</h3>
        <ul className="space-y-3">
          <li className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600">Docker</span>
            <span className="text-red-500 text-sm">Missing in 4 recent applications</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600">AWS</span>
            <span className="text-yellow-500 text-sm">Mentioned frequently, consider improving</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
