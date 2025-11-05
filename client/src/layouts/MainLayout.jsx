// client/src/layouts/MainLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function MainLayout() {
  const [collapsed, setCollapsed] = useState(true); // track sidebar state

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar with props */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main content with dynamic margin */}
      <main
        className={`transition-all duration-300 p-8 min-h-screen overflow-y-auto ${
          collapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
