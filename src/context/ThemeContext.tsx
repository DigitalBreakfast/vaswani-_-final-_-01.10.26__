import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeMode } from '../types';

interface ThemeContextType {
  theme: ThemeMode;
  showGridOverlay: boolean;
  setShowGridOverlay: (show: boolean) => void;
  toggleGridOverlay: () => void;
  showMotionMetrics: boolean;
  setShowMotionMetrics: (show: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showGridOverlay, setShowGridOverlay] = useState<boolean>(false);
  const [showMotionMetrics, setShowMotionMetrics] = useState<boolean>(false);

  const toggleGridOverlay = () => setShowGridOverlay((prev) => !prev);

  useEffect(() => {
    // Enforce pure clean white / warm ivory baseline permanently
    document.documentElement.classList.remove('theme-dark', 'theme-editorial', 'dark');
    document.documentElement.classList.add('theme-light');
    document.body.style.backgroundColor = '#FAF8F5';
    document.body.style.color = '#1A1C1E';
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: 'light',
        showGridOverlay,
        setShowGridOverlay,
        toggleGridOverlay,
        showMotionMetrics,
        setShowMotionMetrics,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
