import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  BarChart3,
  Rocket,
  Briefcase,
  BarChart2,
  Mail,
  FileText,
  LogOut,
} from 'lucide-react';

const navItems = [
  { to: '/dashboard', icon: <BarChart3 size={20} />, label: 'Dashboard' },
  { to: '/recruiters', icon: <Rocket size={20} />, label: 'Recruiters' },
  { to: '/templates', icon: <Briefcase size={20} />, label: 'Templates' },
  { to: '/manual-send', icon: <Mail size={20} />, label: 'Email' },
  { to: '/mail-logs', icon: <BarChart2 size={20} />, label: 'Mail Logs' },
  { to: '/jobs', icon: <FileText size={20} />, label: 'Jobs' },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  const { logout } = useContext(AuthContext);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const user = {
    name: 'Sourabh',
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setCollapsed(true);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setCollapsed]);

  const handleLogout = () => {
    // Clear stored auth data
    // localStorage.removeItem('token');
    // sessionStorage.clear(); // optional
    logout();

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div
      ref={sidebarRef}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      className={`fixed top-0 left-0 h-full bg-[#121E2C] text-white z-50 shadow-lg transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="p-4 text-center">
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          {collapsed ? 'JM' : 'JobMail Pro'}
        </h1>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-1 mt-6">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            {icon}
            {!collapsed && <span className="text-sm font-medium">{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Username Display */}
      {!collapsed && (
        <div className="absolute bottom-16 w-full px-4 text-sm text-gray-400">
          <div className="border-t border-gray-700 pt-3">
            <span className="block text-white font-semibold">{user.name}</span>
          </div>
        </div>
      )}

      {/* Logout */}
      <div className="absolute bottom-4 w-full px-2">
        <button
          className="flex items-center gap-3 px-4 py-2 w-full text-gray-300 hover:bg-gray-700 rounded-md"
          onClick={handleLogout}
        >
          <LogOut size={20} />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
