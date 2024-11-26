import { Sidebar } from '../Sidebar/Sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet

export const Layout = () => {
    const [activeTab, setActiveTab] = useState("My Board");

    return (
      <div className="flex h-screen bg-white">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-6">
          <div className="flex items-center mb-5">
            <h2 className="text-lg">{activeTab}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-10 mr-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <h2 className="text-lg">{activeTab}</h2>
          </div>
          <div className="w-full h-px bg-gray-200 mb-10"></div>
          <h2 className="text-2xl font-bold">{activeTab}</h2>

          {/* This is where the nested route content will be rendered */}
          <Outlet /> {/* Outlet will render the component for the active route */}
        </main>
      </div>
    );
};
