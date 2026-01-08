import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Bell, MessageSquare, Settings, LogOut, Home, Menu, X } from 'lucide-react';

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: <Home size={22} />, label: "Home", path: "/" },
    { icon: <User size={22} />, label: "Profile", path: "/profile" },
    { icon: <Bell size={22} />, label: "Notifications", path: "/notifications", badge: 3 },
    { icon: <MessageSquare size={22} />, label: "Messages", path: "/messages" },
  ];

  return (
    <>
      {/* Menu Toggle (Three Lines) - Floating when sidebar is closed */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed top-6 left-6 z-50 p-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-500 transition-all"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed h-screen bg-[#030712] border-r border-white/10 
        flex flex-col justify-between py-8 px-4 transition-all duration-300 ease-in-out z-40
        ${isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full overflow-hidden p-0'}
      `}>
        
        <div className="flex flex-col gap-8 min-w-[220px]">
          <div className="flex items-center justify-between px-2 mb-4">
            <div className="flex items-center text-blue-500">
              <div className="p-2 bg-blue-500/10 rounded-xl">
                <Settings className="animate-spin-slow" size={20} />
              </div>
              <span className="ml-3 font-bold text-white tracking-widest uppercase text-xs">Dashboard</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg text-slate-400">
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className={`group flex items-center p-3 rounded-2xl transition-all duration-200
                  ${location.pathname === item.path 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'}
                `}
              >
                <div className="relative">
                  {item.icon}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="ml-4 font-semibold text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* User / Bottom Section */}
        <div className="flex flex-col gap-4 border-t border-white/5 pt-6 min-w-[220px]">
          <div className="flex items-center gap-3 p-2 rounded-xl text-white">
            <img src="https://i.pravatar.cc/150?u=9" className="w-10 h-10 rounded-full border border-white/20" alt="user" />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Alex Rivera</p>
              <p className="text-slate-500 text-xs truncate">Pro Account</p>
            </div>
          </div>
          <button className="flex items-center p-3 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-2xl">
            <LogOut size={22} />
            <span className="ml-4 font-semibold text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Dynamic Margin for Content Area */}
      <div className={`transition-all duration-300 ${isOpen ? 'pl-64' : 'pl-0'}`}>
        {/* Your Page Content will render here via App.js or Layout */}
      </div>
    </>
  );
};

export default Aside;


