import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginAPI = (credentials: any) => api.post('/auth/login', credentials);
export const registerAPI = (data: any) => api.post('/auth/register', data);
export const uploadCVAPI = (formData: FormData) => api.post('/cv/upload', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const getJobsAPI = () => api.get('/jobs');
export const addJobAPI = (data: any) => api.post('/jobs', data);
export const runAnalysisAPI = (jobId: string, cvId: string) => api.post('/analysis/run', { jobId, cvId });
export const getDashboardAPI = () => api.get('/dashboard/stats');

export default api;
