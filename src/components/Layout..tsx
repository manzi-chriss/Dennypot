// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { useTheme } from '../ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {children}
    </div>
  );
}

export default Layout;