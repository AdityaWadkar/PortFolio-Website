import React from "react";
import Typical from "react-typical";
import {Link} from "react-scroll";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-contanier">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/aditya-wadkar-69506622a/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/project_maker___/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/c/ProjectMakerzilla">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://github.com/AdityaWadkar">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="hilighted-text">Aditya</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Enthusiastic Developer 🔴",
                    1500,
                    "AL/ML Engineer 💻",
                    1500,
                    "YouTuber 😎",
                    1500,
                    "Content Creator 📝",
                    1500,
                    "React Dev 👩🏻‍💻",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and backend operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <Link to="contactme" spy={true} smooth={true} offset={50} duration={1000}>
            <button className="btn primary-btn">Hire Me</button></Link>
            <a href="Resume.pdf" download="Aditya Resume.pdf">
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
