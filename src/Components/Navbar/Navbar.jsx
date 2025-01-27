import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="bg-[#0B0C10] text-white px-6 py-4 flex justify-between items-center relative">
      {/* Small Devices: Profile Icon (Left Side) */}
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="w-10 h-10 rounded-full border-2 border-purple-500 cursor-pointer md:hidden"
        onClick={() => setIsModalOpen(true)}
      />

      {/* Logo Section */}
      <div className="hidden md:flex items-center space-x-3">
        <div className="text-purple-500 font-bold text-lg">
          <span className="text-[1.5rem]">🚀</span> Programming Hero
        </div>
      </div>

      {/* Links Section (For Big Devices) */}
      <div className="hidden md:flex space-x-8 text-base font-medium">
        <a href="#concept-crackerz" className="hover:text-purple-400">
          Concept Crackerz
        </a>
        <a href="#course-details" className="hover:text-purple-400">
          Course Details
        </a>
        <a href="#support" className="hover:text-purple-400">
          Support
        </a>
        <a href="#blog" className="hover:text-purple-400">
          Blog
        </a>
        <a href="#my-classes" className="hover:text-purple-400">
          My Classes
        </a>
      </div>

      {/* Right Section: Icons and Actions */}
      <div className="flex items-center space-x-6 md:space-x-4">
        {/* Notification Icon */}
        <div className="relative cursor-pointer hidden md:block">
          <span className="text-xl hover:text-purple-400">🔔</span>
        </div>

        {/* Diamond Points */}
        <div className="hidden md:flex items-center bg-green-600 px-4 py-1 rounded-full">
          <span className="text-white font-bold text-lg">256</span>
        </div>

        {/* Enroll Now Button */}
        <button className="hidden md:block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium">
          Enroll Now
        </button>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="hidden md:block w-10 h-10 rounded-full border-2 border-purple-500 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />

        {/* Hamburger Menu (Right Side for Small Devices) */}
        <button
          className="md:hidden bg-[#1F1F2E] p-2 rounded-full hover:bg-purple-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} className="text-white" />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-50 flex justify-end md:justify-center"
          onClick={() => setIsModalOpen(false)} // Close modal on outside click
        >
          <div
            className={`fixed top-0 ${isModalOpen
              ? "left-0 md:right-0"
              : "-left-full"
              } h-full w-80 bg-[#1A1A25] shadow-lg text-white p-6 z-50 transition-all md:left-auto`}
            onClick={(e) => e.stopPropagation()} // Prevent close on inside click
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            {/* Modal Content */}
            <div onClick={() => setIsModalOpen(false)}  >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-2 border-purple-500"
                />
                <h2 className="text-lg font-bold">Abo Raihan</h2>
                <p className="text-gray-300 text-sm">Student ID: WEB10-1151</p>
              </div>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center space-x-4">
                  <span>👤</span>
                  <a href="#my-profile" className="hover:text-purple-400">
                    My Profile
                  </a>
                </li>
                <li className="flex items-center space-x-4">
                  <span>📚</span>
                  <a href="#my-classes" className="hover:text-purple-400">
                    My Classes
                  </a>
                </li>
                <li className="flex items-center space-x-4">
                  <span>🔑</span>
                  <a href="#concept-crackerz" className="hover:text-purple-400">
                    Concept Crackerz
                  </a>
                </li>
                <li className="flex items-center space-x-4">
                  <span>🔖</span>
                  <a href="#bookmark" className="hover:text-purple-400">
                    Bookmark
                  </a>
                </li>
                <li className="flex items-center space-x-4">
                  <span>📈</span>
                  <a href="#leaderboard" className="hover:text-purple-400">
                    Leaderboard
                  </a>
                </li>
                <li className="flex items-center space-x-4">
                  <span>📣</span>
                  <a href="#announcement" className="hover:text-purple-400">
                    Announcement
                  </a>
                </li>
                <li className="flex items-center space-x-4">
                  <span>💬</span>
                  <a href="#helpdesk" className="hover:text-purple-400">
                    Help Desk
                  </a>
                </li>
                <li className="text-red-500 flex items-center space-x-4 hover:text-red-400">
                  <span>🔓</span>
                  <a href="#logout">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}


      {/* Hamburger Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-50 flex justify-end"
          onClick={() => setIsMenuOpen(false)} // Close menu on outside click
        >
          <div

            className="h-full w-80 bg-[#0B0C10] flex flex-col items-center space-y-6 py-8 px-4 shadow-lg transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>

            {/* Menu Items */}
            <ul onClick={() => setIsMenuOpen(false)} className="text-white text-lg space-y-4 mt-8">
              <li className="flex items-center space-x-4">
                <span>🏠</span>
                <a href="#home" className="hover:text-purple-400">
                  Home
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span>📚</span>
                <a href="#my-classes" className="hover:text-purple-400">
                  My Classes
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span>📘</span>
                <a href="#course-details" className="hover:text-purple-400">
                  Course Details
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span>🔑</span>
                <a href="#concept-crackerz" className="hover:text-purple-400">
                  Concept Crackerz
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span>📞</span>
                <a href="#support" className="hover:text-purple-400">
                  Support
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span>📝</span>
                <a href="#blog" className="hover:text-purple-400">
                  Blog
                </a>
              </li>
            </ul>

            {/* Enroll Now Button */}
            <button onClick={() => setIsMenuOpen(false)} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold px-8 py-3 rounded-lg">
              Enroll Now
            </button>
          </div>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
