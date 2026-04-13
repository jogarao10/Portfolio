import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__content">
          <h2 className="about__title">
            About <span>Me</span>
          </h2>
          <h3 className="about__subtitle">Full Stack Developer!</h3>
          <p className="about__text">
            I am a Full Stack Developer with 1.5 years of experience building
            modern and scalable web applications. I focus on writing clean backend
            services, creating responsive frontend interfaces, and delivering
            reliable end-to-end solutions with strong performance and code quality.
          </p>
          <p className="about__text about__text--extra">
            My core strengths are Java, Spring Boot, REST APIs, React, and SQL.
            I enjoy solving real business problems, improving application
            performance, and building maintainable products that scale with user
            growth.
          </p>
          <button type="button" className="about__btn">
            More About Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
