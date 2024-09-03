// import React from "react";
// import "./contact.css";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaInstagram } from "react-icons/fa";
// import { BsWhatsapp } from "react-icons/bs";
// import { useRef } from "react";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_lr3ew4y',
//         'template_p75ggym',
//         form.current,
//         'DcAlsQ86z9x9Oa-Dl'
//       )

//       e.target.reset();
//   };

//   return (
//     <section id="contact">
//       <h5>Get In Touch</h5>
//       <h2>Contact Me</h2>

//       <div className="container contact__container">
//         <div className="contact__options">
//           <article className="contact__option">
//             <MdOutlineEmail />

//             <h4>Email</h4>
//             <h5>anuragkumar3260@gmail.com</h5>
//             <a href="mailto:anuragkumar3260@gmail.com" target="_blank" rel="noreferrer">
//               Send a message
//             </a>
//           </article>

//           <article className="contact__option">
//             <FaInstagram />

//             <h4>Instagram</h4>
//             <h5>anurag_parjapat</h5>
//             <a href="https://www.instagram.com/anurag_parjapat" target="_blank" rel="noreferrer">
//               Send a message
//             </a>
//           </article>

//           <article className="contact__option">
//             <BsWhatsapp />

//             <h4>WhatsApp</h4>
//             <h5>+91-8295160197</h5>
//             <a href="https://api.whatsapp.com/send?phone=+8295160197">
//               Send a message
//             </a>
//           </article>
//         </div>

//         {/* END OF Contact form */}

//         <form ref={form} onSubmit={sendEmail}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Full Name"
//             required
//           />
//           <input type="email" name="email" placeholder="Your Email" required />
//           <textarea
//             name="message"
//             rows="7"
//             placeholder="Your Message"
//             required
//           ></textarea>
//           <button type="submit" className="btn btn-primary">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lr3ew4y",
        "template_p75ggym",
        form.current,
        "DcAlsQ86z9x9Oa-Dl"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.text);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />

            <h4>Email</h4>
            <h5>anuragkumar3260@gmail.com</h5>
            <a
              href="mailto:anuragkumar3260@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaInstagram />

            <h4>Instagram</h4>
            <h5>anurag_parjapat</h5>
            <a
              href="https://www.instagram.com/anurag_parjapat"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />

            <h4>WhatsApp</h4>
            <h5>+91-8295160197</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8295160197"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            aria-label="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            aria-label="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
