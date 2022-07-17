import React from "react";
import "./AboutMe.css";
import { Link } from "react-scroll";
export default function about() {
  return (
    <div className="about-contanier" id="aboutme">
      <div className="about-title">
        <div className="about-title-heading">
          About Me
          <div className="about-title-description">
            Why choose me ?<div className="border-image"></div>
          </div>
        </div>
      </div>
      <div className="about-grandparent">
        <div className="about-parent">
          <div className="about-picture-background">
            <div className="about-picture"></div>
          </div>

          <div className="about-details">
            <span className="description">
              Enthusiastic About Data Science And Machine Learning. Objective Is
              To Achieve A Good Position By Doing Satisfying Work In IT Field.
              Emphatically Engaged To Complete Task In Fast- faced Environment.
            </span>
            <div className="about-details-name">
              <span className="about-hilighted-text">
                <h2>Few Highlights</h2>
              </span>
              <span className="about-skills">
                <ul>
                  <li>Software Development</li>
                  <li>React Js and Python</li>
                  <li>Interactive Front End as per design</li>
                  <li>Web Scraping</li>
                  <li>Overseeing data set</li>
                </ul>
              </span>
            </div>

            <div className="about-options">
              <Link
                to="contactme"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <button className="btn primary-btn"> Hire Me </button>
              </Link>
              <a href="Resume.pdf" download="Aditya Resume.pdf">
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
