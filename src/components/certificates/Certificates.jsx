// import React from "react";
// import './certificates.css'
// import IMG1 from "../../assets/c1.jpg";
// import IMG2 from "../../assets/c2.jpg";
// import IMG3 from "../../assets/c4.jpg";
// import IMG4 from "../../assets/c3.jpg";
// import IMG5 from "../../assets/c5.jpg";
// import IMG6 from "../../assets/c6.jpg";

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: "Data Structures and Algorithms",
//     link: "https://drive.google.com/file/d/1H8Co5ycLbY1Pj5N_bh23KLT4jTF8O-U9/view",
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: "Advanced Web Development",
//     link: "https://drive.google.com/file/d/1QMRzguBE8IU7bzjp8hKOEeHztbsq4tzy/view",
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: "Developing Front-End Apps with React",
//     link: "https://drive.google.com/file/d/1Y0FfiHH3mtiIpjMujjEhahUBo37CCEjW/view",
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: "Developing Back-End Apps with Node.js and Express",
//     link: "https://drive.google.com/file/d/18crLJx5jdX8M8WFgslNXVQo-d2g1B8nV/view",
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: "Certificate in Professional Soft Skills",
//     link: "https://drive.google.com/file/d/10nhp-M14eFEePBhjKnblui80Oh9j734W/view",
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: "The Full Stack",
//     link: "https://drive.google.com/file/d/19SWBNDYZ9U8ZJKzHw4p7XbQKzHDYkFWQ/view",
//   },
// ];
// const Certificates = () => {
//   return (
//     <section id="certificates">
//       <h5>My Recent Work</h5>
//       <h2>Certificates</h2>

//       <div className="container certificates__container">
//         {data.map(({id, image, title, link}) => {
//           return (
//             <article key={id} className="certificates__item">
//               <div className="certificates__item-image">
//                 <img src={image} alt={title} />
//               </div>
//               <h3>{title}</h3>
//               <div className="certificates__item-cta">
//                 <a href={link} className="btn">
//                   Link
//                 </a>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Certificates;


import React from "react";
import './certificates.css';
import IMG1 from "../../assets/c1.jpg";
import IMG2 from "../../assets/c2.jpg";
import IMG3 from "../../assets/c4.jpg";
import IMG4 from "../../assets/c3.jpg";
import IMG5 from "../../assets/c5.jpg";
import IMG6 from "../../assets/c6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Data Structures and Algorithms",
    link: "https://drive.google.com/file/d/1H8Co5ycLbY1Pj5N_bh23KLT4jTF8O-U9/view",
  },
  {
    id: 2,
    image: IMG2,
    title: "Advanced Web Development",
    link: "https://drive.google.com/file/d/1QMRzguBE8IU7bzjp8hKOEeHztbsq4tzy/view",
  },
  {
    id: 3,
    image: IMG3,
    title: "Developing Front-End Apps with React",
    link: "https://drive.google.com/file/d/1Y0FfiHH3mtiIpjMujjEhahUBo37CCEjW/view",
  },
  {
    id: 4,
    image: IMG4,
    title: "Developing Back-End Apps with Node.js and Express",
    link: "https://drive.google.com/file/d/18crLJx5jdX8M8WFgslNXVQo-d2g1B8nV/view",
  },
  {
    id: 5,
    image: IMG5,
    title: "Certificate in Professional Soft Skills",
    link: "https://drive.google.com/file/d/10nhp-M14eFEePBhjKnblui80Oh9j734W/view",
  },
  {
    id: 6,
    image: IMG6,
    title: "The Full Stack",
    link: "https://drive.google.com/file/d/19SWBNDYZ9U8ZJKzHw4p7XbQKzHDYkFWQ/view",
  },
];

const Certificates = () => {
  return (
    <section id="certificates">
      <h5>My Recent Work</h5>
      <h2>Certificates</h2>

      <div className="container certificates__container">
        {data.map(({ id, image, title, link }) => (
          <article key={id} className="certificates__item">
            <div className="certificates__item-image">
              <img src={image} alt={title} /> {/* Added alt attribute */}
            </div>
            <h3>{title}</h3>
            <div className="certificates__item-cta">
              <a href={link} target="_blank" rel="noreferrer" className="btn">
                Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
