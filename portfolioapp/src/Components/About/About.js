import React from "react";

const About = () => {
  return (
    <section id="about-me">
      <div className="outside-container">
        <div className="inside-container">
          <div className="profile-photo">
            <img
              src="https://sg-hohenlimburg-holthausen.de/wp-content/uploads/2020/07/avatar_m.png"
              width="200px"
            ></img>
          </div>

          <div className="my-name">
            <h2>Dominik Kwintal</h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <hr className="about-hr"></hr>
          <div className="media-links">
            <i class="bi bi-discord"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-facebook"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
