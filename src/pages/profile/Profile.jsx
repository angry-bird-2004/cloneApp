import React from 'react'

const Profile = () => {
  const posts = Array(9).fill("https://via.placeholder.com/300"); // Placeholder images

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Container */}
      <div className="max-w-4xl mx-auto pt-8 px-4">
        
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row items-center mb-10">
          <div className="sm:w-1/3 flex justify-center mb-4 sm:mb-0">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile" 
              className="rounded-full w-20 h-20 sm:w-40 sm:h-40 border border-gray-200 p-1"
            />
          </div>
          
          <div className="sm:w-2/3">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-light mr-4">username_123</h2>
              <button className="bg-blue-500 text-white px-4 py-1 rounded font-semibold text-sm">Follow</button>
            </div>
            
            <div className="flex space-x-10 mb-4">
              <span><strong>124</strong> posts</span>
              <span><strong>1.2k</strong> followers</span>
              <span><strong>350</strong> following</span>
            </div>
            
            <div>
              <h1 className="font-bold">Full Name</h1>
              <p className="text-gray-600">Digital Creator | Explorer 📍</p>
              <a href="#" className="text-blue-900 font-semibold">yourwebsite.com</a>
            </div>
          </div>
        </header>

        {/* Post Grid Section */}
        <div className="border-t border-gray-300 pt-4">
          <div className="grid grid-cols-3 gap-1 sm:gap-6">
            {posts.map((src, index) => (
              <div key={index} className="aspect-square bg-gray-200 overflow-hidden">
                <img 
                  src={src} 
                  alt={`post-${index}`} 
                  className="w-full h-full object-cover hover:opacity-80 transition cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile
