import React from 'react';
import { Plus } from 'lucide-react';

const Upper = () => {
  // Mock data for your stories
  const stories = [
    { id: 1, label: "Your Story", active: false, img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, label: "Design", active: true, img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, label: "React", active: true, img: "https://i.pravatar.cc/150?u=3" },
    { id: 4, label: "UI/UX", active: true, img: "https://i.pravatar.cc/150?u=4" },
    { id: 5, label: "Code", active: false, img: "https://i.pravatar.cc/150?u=5" },
    { id: 6, label: "Vibe", active: true, img: "https://i.pravatar.cc/150?u=6" },
    { id: 7, label: "Explore", active: false, img: "https://i.pravatar.cc/150?u=7" },
  ];

  return (
    <div className="w-full bg-[#030712] py-6 border-b border-white/5">
      {/* Scrollable Container */}
      <div className="flex items-center gap-6 px-6 overflow-x-auto no-scrollbar">
        
        {/* "Add Story" Button */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-600 group-hover:border-blue-500 transition-colors">
            <Plus size={24} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
          </div>
          <span className="text-[10px] md:text-xs font-medium text-slate-500">Post</span>
        </div>

        {/* Dynamic Stories */}
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
            <div className={`
              relative p-[3px] rounded-full transition-transform active:scale-90 duration-300
              ${story.active 
                ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' 
                : 'bg-slate-700'}
            `}>
              <div className="bg-[#030712] p-[2px] rounded-full">
                <img 
                  src={story.img} 
                  alt={story.label}
                  className="w-14 h-14 md:w-18 md:h-18 rounded-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all"
                />
              </div>
              
              {/* Optional: Status Dot */}
              {story.active && (
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#030712] rounded-full"></div>
              )}
            </div>
            <span className={`text-[10px] md:text-xs font-medium ${story.active ? 'text-white' : 'text-slate-500'}`}>
              {story.label}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Upper;