import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Bell, Image, MessageSquare, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Blog Posts', path: '/dashboard/blog' },
    { icon: Bell, label: 'Notices', path: '/dashboard/notices' },
    { icon: MessageSquare, label: 'Queries', path: '/dashboard/queries' },
    { icon: Image, label: 'Gallery', path: '/dashboard/gallery' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="bg-white h-full w-64 fixed left-0 top-16 shadow-md">
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;