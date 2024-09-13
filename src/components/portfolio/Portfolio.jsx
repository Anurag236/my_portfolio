import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pp1.png";
import IMG2 from "../../assets/pp2.png";
import IMG3 from "../../assets/pp3.png";
import IMG4 from "../../assets/sorting.png";
import IMG5 from "../../assets/home.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Social-Media App",
    github: "https://github.com/Anurag236/Social-Media-App",
    demo: "https://onine-socialgram.netlify.app/",
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
    demo: "https://online-code-studio.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Sorting Algorithm Visualizer ",
    github: "https://github.com/Anurag236/Sorting-Algorithms-Visualizer",
    demo: "https://sorting-algorithms-visualizer-ak.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Home Rental Application",
    github: "https://github.com/Anurag236/Rental-Application",
    demo: "https://github.com/Anurag236/Rental-Application",
  }
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} rel="noreferrer" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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
