import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pp1.png";
import IMG2 from "../../assets/pp2.png";
import IMG3 from "../../assets/pp3.png";
import IMG4 from "../../assets/dr.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Social-Media App",
    github: "https://github.com/Anurag236/Social-Media-App",
    demo: "https://github.com/Anurag236/Social-Media-App",
  },
  {
    id: 2,
    image: IMG2,
    title: "Chrome Extension",
    github: "https://github.com/Anurag236/Chrome_Extension",
    demo: "https://github.com/Anurag236/Chrome_Extension",
  },
  {
    id: 3,
    image: IMG3,
    title: "Code Editor",
    github: "https://github.com/Anurag236/code_editor",
    demo: "https://github.com/Anurag236/code_editor",
  },
  {
    id: 4,
    image: IMG4,
    title: "Appointment App",
    github: "https://github.com/Anurag236/Medicare-Booking",
    demo: "https://github.com/Anurag236/Medicare-Booking",
  },
  
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
