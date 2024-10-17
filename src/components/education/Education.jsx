import React from "react";
import "./education.css";
import { FaGraduationCap } from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";

const Education = () => {
  return (
    <section id="education">
      <h5>What I Have Did</h5>
      <h2>My Education</h2>

      <div className="container education__container">
        <div className="education__frontend">
          <h3>Bachelor</h3>
          <div className="education__content">
            <article className="education__details">
              <FaGraduationCap className="education__details-icon"/>
              <div>
                <h4>Chitkara University</h4>
              </div>
            </article>

            <article className="education__details">
              <FaLocationDot className="education__details-icon"/>
              <div>
                <h4>Rajpura, Punjab</h4>
              </div>
            </article>

            <article className="education__details">
              <GiMaterialsScience className="education__details-icon" />
              <div>
                <h4>Computer Science and Engineering</h4>
              </div>
            </article>

            <article className="education__details">
              <BsCalendarDateFill className="education__details-icon" />
              <div>
                <h4>2021-2025</h4>
              </div>
            </article>

            <article className="education__details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>9.37 CGPA</h4>
              </div>
            </article>
            
          </div>
        </div>

        {/* End of Frontend */}

        <div className="education__backend">
          <h3>Senior Secondary</h3>
          <div className="education__content">
            <article className="education__details">
              <LuSchool className="education__details-icon" />
              <div>
                <h4>Saraswati Senior Secondary School</h4>
              </div>
            </article>

            <article className="education__details">
              <FaLocationDot className="education__details-icon"/>
              <div>
                <h4>Saraswati Nagar, Haryana</h4>
              </div>
            </article>

            <article className="education__details">
              <BsCalendarDateFill className="education__details-icon"/>
              <div>
                <h4>2019-2020</h4>
              </div>
            </article>

            <article className="education__details">
              <BsPatchCheckFill className="education__details-icon"/>
              <div>
                <h4>95.8%</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="education__backend">
          <h3>Secondary</h3>
          <div className="education__content">
          <article className="education__details">
              <LuSchool className="education__details-icon"/>
              <div>
                <h4>Sir Jawahar Singh Public School</h4>
              </div>
            </article>

            <article className="education__details">
              <FaLocationDot className="education__details-icon"/>
              <div>
                <h4>Saraswati Nagar, Haryana</h4>
              </div>
            </article>

            <article className="education__details">
              <BsCalendarDateFill className="education__details-icon"/>
              <div>
                <h4>2017-2018</h4>
              </div>
            </article>

            <article className="education__details">
              <BsPatchCheckFill className="education__details-icon"/>
              <div>
                <h4>87.2%</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
