import React from "react";
import './Footer.css'
import {Link} from "react-scroll";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 text-justify col-lg-10 mx-auto">
            <div className="row">
              <div className="col-12  col-lg-5">
                <h3>Aditya wadkar</h3>
                <br/>
                <br/>
                <ul>
                  Enthusiastic About Data Science And Machine Learning.
                  Objective Is To Achieve A Good Position By Doing Satisfying
                  Work In IT Field. Emphatically Engaged To Complete Task In
                  Fast- faced Environment.
                </ul>
              </div>
              <div className="col-12 text-center col-lg-2">
                <h3>Important Links</h3>
                <br/>
                <ul>
            
                  <li>
                    <Link to="home" spy={true} smooth={true} offset={10} duration={500}>home</Link>
                  </li>
                  <li>
                  <Link to="aboutme" spy={true} smooth={true} offset={-5} duration={500}>About me</Link>
                  </li>
                  <li>
                  <Link to="resume" spy={true} smooth={true} offset={10} duration={500}>Resume</Link>
                  </li>
                  <li>
                  <Link to="contactme" spy={true} smooth={true} offset={50} duration={500}>Contact Me</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 text-center col-lg-4">
                <h3>contact info</h3>
                <br/><br/>
                <ul>
                  <li>+91 8275693296</li>
                  <li>wadkaraditya923@gmail.com</li>
                  <li> Pune</li>
                  <li>Maharashtra</li>
                  <li>India</li>
                </ul>
              </div>
              <div className="col-12 text-center col-lg-1">
                <h3>Social Links</h3>
                <br/>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/project_maker___/">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/ProjectMakerzilla">
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/aditya-wadkar/">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/AdityaWadkar">Github</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr/>
            <div className="mt-3">
              <p className="main hero para text-center width=100">copyright @ 2022 AdityaWadkar. All Rights reserved.</p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
