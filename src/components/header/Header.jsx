import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
