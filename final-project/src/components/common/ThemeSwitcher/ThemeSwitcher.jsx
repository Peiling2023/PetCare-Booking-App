import useThemes from '../../../hooks/useThemes'; 
import './themeSwitcher.css';


const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useThemes();
  
    return (
      <div className="theme-switcher">
        <p>Current Theme: <strong>{theme}</strong></p>
        <button
          onClick={toggleTheme}
          className="theme-toggle-button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
        </button>
      </div>
    );
  };
  
  export default ThemeSwitcher;
