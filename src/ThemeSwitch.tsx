// src/ThemeSwitch.tsx
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitch: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-switch">
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

export default ThemeSwitch;
