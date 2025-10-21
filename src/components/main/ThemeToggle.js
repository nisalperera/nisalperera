// src/components/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import "./css/toggle.css"

const ThemeToggle = ({ minimized=false, isMobile=false }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`theme-toggle-btn${theme === 'dark' ? ' dark' : ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="toggle-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
      {!minimized && !isMobile && (theme === 'light' ? 'Dark Mode' : 'Light Mode')}
      {isMobile && (theme === 'light' ? 'Dark Mode' : 'Light Mode')}
    </button>
  );
};

export default ThemeToggle;
