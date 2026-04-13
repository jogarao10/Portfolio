import "./Hero.css";
import profileImage from "../../assets/image1.jpeg";
import { Github, Linkedin } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">Hello, It's Me</p>
          <h2 className="hero__name">KORRAYI JOGARAO</h2>
          <div className="hero__motion-clip hero__motion-clip--role">
            <p className="hero__role">
              <span className="hero__role-prefix">And I&apos;m a</span>
              <span className="hero__typing-frame">
                <span className="hero__typing-text">Full Stack Java Developer</span>
              </span>
            </p>
          </div>
          <div className="hero__motion-clip hero__motion-clip--description">
            <p className="hero__description">
              I build clean and scalable web applications with strong backend logic,
              modern frontend UI, and reliable API integrations.
            </p>
          </div>

          <div className="hero__socials" aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/jogarao-korrayi-87792222a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/jogarao10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className="hero__image-wrap">
          <div className="hero__image-ring">
            <img src={profileImage} alt="Havindu Hemal" className="hero__image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
