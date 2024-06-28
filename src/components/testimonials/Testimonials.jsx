import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: "Shruti Sehwal",
    review:
      "Anurag Kumar's expertise in soft skills is unparalleled. His communication and presentation abilities are exceptional, making him a standout professional in any team. Additionally, his skills in frontend and backend development have been a tremendous asset to our projects. I highly recommend Anurag for any role that requires strong interpersonal and professional skills, as well as technical proficiency.",
  },
  {
    avatar: AVTR2,
    name: "Mayank Goyal",
    review:
      "Anurag Kumar's expertise extends beyond his technical abilities. His experience in both frontend and backend development makes him a true full stack developer. He has consistently delivered high-quality work and has been a significant asset to our team. Anurag is a polished, skilled, and technically adept professional.",
  },
  {
    avatar: AVTR3,
    name: "Ranbir Choudhary",
    review:
      "Working with Anurag Kumar has been a pleasure. His robust experience in frontend and backend development has added significant value to our projects. Anurag's well-rounded skill set in technical areas makes him a highly valuable full stack developer and team member. His contributions have greatly enhanced our team's performance and project outcomes.",
  },
  {
    avatar: AVTR4,
    name: "Kavya Sharma",
    review:
      "Anurag Kumar has proven to be an exceptional full stack developer. His technical expertise in both frontend and backend development has significantly contributed to our projects' success. Anurag's ability to seamlessly integrate various technologies and deliver high-quality solutions is impressive. He is a valuable asset to any development team and consistently exceeds expectations.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
