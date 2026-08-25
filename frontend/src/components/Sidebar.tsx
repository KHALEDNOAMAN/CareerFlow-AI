import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Briefcase, BarChart2, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../lib/auth';

const links = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'My CVs', path: '/cv', icon: FileText },
  { name: 'Jobs', path: '/jobs', icon: Briefcase },
  { name: 'Analysis', path: '/analysis', icon: BarChart2 },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-600">CareerFlow AI</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`
                  }
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button 
          onClick={logout}
          className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}
