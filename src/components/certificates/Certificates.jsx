import React from "react";
import './certificates.css'
import IMG1 from "../../assets/c1.jpg";
import IMG2 from "../../assets/c2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Charts templates & infographics in Figma",
    link: "https://github.com/Anurag236",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    link: "https://github.com/Anurag236",
  },
  {
    id: 3,
    image: IMG3,
    title: "Charts templates & infographics in Figma",
    link: "https://github.com/Anurag236",
  },
  {
    id: 4,
    image: IMG4,
    title: "Charts templates & infographics in Figma",
    link: "https://github.com/Anurag236",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    link: "https://github.com/Anurag236",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographics in Figma",
    link: "https://github.com/Anurag236",
  },
];
const Certificates = () => {
  return (
    <section id="certificates">
      <h5>My Recent Work</h5>
      <h2>Certificates</h2>

      <div className="container certificates__container">
        {data.map(({id, image, title, link}) => {
          return (
            <article key={id} className="certificates__item">
              <div className="certificates__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="certificates__item-cta">
                <a href={link} className="btn">
                  Link
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
