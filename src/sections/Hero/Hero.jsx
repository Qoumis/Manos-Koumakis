import styles from "./HeroStyles.module.css";
import profilePic from "../../assets/logos/profile.png";
import mailIconDark from "../../assets/icons/icons8-mail-dark.png";
import LinkedinIconDark from "../../assets/icons/icons8-linked-in-dark.svg";
import GitHubIconDark from "../../assets/icons/icons8-github-dark.svg";
import mailIconLight from "../../assets/icons/icons8-mail-light.png";
import LinkedinIconLight from "../../assets/icons/icons8-linked-in-light.svg";
import GitHubIconLight from "../../assets/icons/icons8-github-light.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const mailIcon = theme === "light" ? mailIconLight : mailIconDark;
  const linkedInIcon = theme === "light" ? LinkedinIconLight : LinkedinIconDark;
  const gitHubIcon = theme === "light" ? GitHubIconLight : GitHubIconDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.Hero}>
        <img
          className={styles.profilePic}
          src={profilePic}
          alt="My Profile Picture Goes Here"
          onClick={toggleTheme}
        />
        <div className={styles.info}>
          <h1 className="sectionTitle">Manos Koumakis</h1>
          <p>
            In the world of code, less is more — I focus on crafting efficient,
            streamlined solutions that work flawlessly behind the scenes.
          </p>
          <span className={styles.socials}>
            <a href="mailto:koumakis.m@protonmail.com" target="_blank">
              <img src={mailIcon} alt="Email icon" />
            </a>
            <a href="https://github.com/Qoumis" target="_blank">
              <img src={gitHubIcon} alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanouil-koumakis-878391308/"
              target="_blank"
            >
              <img src={linkedInIcon} alt="LinkedIn icon" />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="sectionTitle">About</h2>
        <p>
          Computer Science graduate with a strong interest in backend
          development and software engineering in general. I’ve spent a lot of
          time working with JavaScript, Rest APIs, Electron, databases &
          management Systems and I’m always eager to dive deeper into these
          areas. I've also dabbled a bit in cloud computing with AWS, which gave
          me some foundational knowledge of building and deploying applications
          on the cloud. <br /> <br />
          Although I’m just starting out, I’m excited to continue learning and
          growing as a developer. I’m looking for opportunities where I can
          contribute, learn from others and further develop my skills.
          <br /> In my free time, I’m passionate about game development and
          currently learning Godot to experiment with creating my own games.
          While it’s a hobby for now, it’s a great way for me to stay creative
          and practice my problem-solving skills.
        </p>
      </div>
    </section>
  );
}

export default Hero;
