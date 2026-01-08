import React from 'react';
import { User, Bell, MessageSquare, Settings, LogOut, Home } from 'lucide-react';

const Aside = () => {
  const menuItems = [
    { icon: <Home size={22} />, label: "Home", active: true },
    { icon: <User size={22} />, label: "Profile", active: false },
    { icon: <Bell size={22} />, label: "Notifications", active: false, badge: 3 },
    { icon: <MessageSquare size={22} />, label: "Messages", active: false },
  ];

  return (
    <aside className="h-screen w-20 md:w-64 bg-[#030712] border-r border-white/10 flex flex-col justify-between py-8 px-4 transition-all duration-300">
      
      {/* Top Section: Navigation */}
      <div className="flex flex-col gap-8">
        {/* Brand/Top Icon */}
        <div className="flex items-center justify-center md:justify-start px-2 mb-4 text-blue-500">
          <div className="p-2 bg-blue-500/10 rounded-xl">
            <Settings className="animate-spin-slow" />
          </div>
          <span className="hidden md:block ml-3 font-bold text-white tracking-widest uppercase text-xs">Dashboard</span>
        </div>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className={`group flex items-center justify-center md:justify-start p-3 rounded-2xl cursor-pointer transition-all duration-200
                ${item.active 
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'}
              `}
            >
              <div className="relative">
                {item.icon}
                {/* Notification Badge */}
                {item.badge && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="hidden md:block ml-4 font-semibold text-sm transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Section: User & Logout */}
      <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
        <div className="flex items-center justify-center md:justify-start gap-3 p-2 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
          <img 
            src="https://i.pravatar.cc/150?u=9" 
            className="w-10 h-10 rounded-full border border-white/20" 
            alt="user"
          />
          <div className="hidden md:block overflow-hidden">
            <p className="text-white text-sm font-bold truncate">Alex Rivera</p>
            <p className="text-slate-500 text-xs truncate">Pro Account</p>
          </div>
        </div>
        
        <button className="flex items-center justify-center md:justify-start p-3 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-2xl transition-all">
          <LogOut size={22} />
          <span className="hidden md:block ml-4 font-semibold text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Aside;