import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <div className="about-section">
      <section className="wrapper">
        <div className="about-wrapper">
          <div id="title">
            <span>About Us</span>
          </div>
          <div className="content-wrapper">
            <div className="title-wrapper">
              <p className="title-text">
                made with love and passion by davit koshkelius (huge jdm fanboy)
              </p>
              <p className="title-text">
                Not only do Japanese market models offer higher quality and
                technology, but Japanese diligently keep their cars in the best
                possible condition through attentive maintenance and tender
                loving care. Over 150,000 of these vehicles go on auction every
                week, providing unrivaled value for secondhand car shoppers
                around the world.{" "}
              </p>
            </div>

            <div className="info-wrapper">
              <p>
                <span>Company:</span> JDM
              </p>
              <p>
                <span>Email:</span>
                <a href="mailto:jdm@gmail.com">jdm@gmail.com</a>
              </p>
              <p>
                <span>Location:</span> Tokyo, Japan
              </p>
              <a href="#contact-section">
                <Link to="/contact">
                  <button>Contact</button>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
