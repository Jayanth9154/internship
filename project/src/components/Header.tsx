import React from 'react';
import { Brain, Car, LogOut, Map, Route, BarChart3, Grid3X3 } from 'lucide-react';

interface HeaderProps {
  onLogout: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Grid3X3 },
    { id: 'map', label: 'Live Map', icon: Map },
    { id: 'routes', label: 'AI Routes', icon: Route },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-2 rounded-xl">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <Car className="w-5 h-5 text-orange-500 ml-2" />
            <span className="ml-3 text-xl font-bold text-gray-900">NeuroFleetX</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <div className="text-sm text-gray-600">Welcome back!</div>
              <div className="text-sm font-medium text-gray-900">Fleet Manager</div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;