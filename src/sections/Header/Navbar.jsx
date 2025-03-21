import styles from "./NavbarStyles.module.css";
import { useState, useEffect } from "react";
import { useTheme } from "../../common/ThemeContext";
import modeIconLight from "../../assets/icons/icons8-light-mode.png";
import modeIconDark from "../../assets/icons/icons8-dark-mode.png";
import modeIconDarkReverse from "../../assets/icons/icons8-dark-mode-reverse.png";
import modeIconLightReverse from "../../assets/icons/icons8-light-mode-reverse.png";

function NavBar() {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const { theme, toggleTheme } = useTheme();

  const themeModeIcon = theme === "light" ? modeIconDark : modeIconLight;
  const themeModeReverse =
    theme === "light" ? modeIconDarkReverse : modeIconLightReverse;

  // Hide the navbar when scrolling down and show it when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop && currentScroll > calculateOffset()) {
        // Scrolling down
        setIsNavbarHidden(true);
      } else {
        // Scrolling up
        setIsNavbarHidden(false);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      id="navbar"
      className={`${styles.navbar} ${isNavbarHidden ? styles.hidden : ""} 
      ${
        !isNavbarHidden && window.pageYOffset > calculateOffset() + 20
          ? styles.active
          : ""
      }`}
    >
      <ul>
        <li>
          <a href="#hero">
            <h3>About</h3>
          </a>
        </li>
        <li>
          <a href="#skills">
            <h3>Skills</h3>
          </a>
        </li>
        <li>
          <a href="#projects">
            <h3>Projects</h3>
          </a>
        </li>
      </ul>
      <img
        className={styles.themeMode}
        src={`${
          !isNavbarHidden && window.pageYOffset > calculateOffset() + 20
            ? themeModeReverse
            : themeModeIcon
        }`}
        alt="Theme Mode Icon"
        onClick={toggleTheme}
      ></img>
    </div>
  );
}

//calculate the hide bar offset based on the screen size
function calculateOffset() {
  if (window.innerWidth > 768) return 100;
  else if (window.innerWidth > 525) return 80;
  else if (window.innerWidth > 420) return 45;

  return 40;
}

export default NavBar;
