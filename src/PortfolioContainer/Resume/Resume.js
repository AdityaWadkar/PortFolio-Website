import { React, useState } from "react";
import "./Resume.css";
export default function Resume() {
  const [tooggleState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="resume-container" id="resume">
      <div className="resume-title">
        <div className="resume-title-heading">
          Resume
          <div className="resume-title-description">
            My Formal Bio Details<div className="border-image"></div>
          </div>
        </div>
      </div>
      <div className="resume-bio-details">
        <div className="resume-tabs">
          <div className="tabs-header">
            <div
              className={tooggleState === 1 ? "active" : ""}
              onClick={() => toogleTab(1)}
            >
              <i className="fa fa-graduation-cap"> Education</i>
            </div>
            <div
              className={tooggleState === 2 ? "active" : ""}
              onClick={() => toogleTab(2)}
            >
              <i className="fa fa-history"> Work History</i>
            </div>
            <div
              className={tooggleState === 3 ? "active" : ""}
              onClick={() => toogleTab(3)}
            >
              <i className="fa fa-code"> Coding Skills</i>
            </div>
            <div
              className={tooggleState === 4 ? "active" : ""}
              onClick={() => toogleTab(4)}
            >
              <i className="fa fa-bar-chart"> Projects</i>
            </div>
            <div
              className={tooggleState === 5 ? "active" : ""}
              onClick={() => toogleTab(5)}
            >
              <i className="fa fa-heart"> Interests</i>
            </div>
          </div>

          <div className="tab-content">
            <div className={tooggleState === 1 ? "active" : ""}>
              <i className="fa fa-graduation-cap"></i>
              <h2>Education</h2>
              <div className="education">
                <div className="one-line">
                  <h4>Bachleor of Engineering in Information Technology</h4>
                  <span>2021-2024</span>
                </div>
                <div className="college">
                  Pune Institute of Computer Technology
                </div>

                <div className="one-line">
                  <h4>Diploma in Information Technology</h4>
                  <span>2018-2021</span>
                </div>
                <div className="college">
                  All India Shri Shivaji Memorial Society's Polytechnic
                </div>

                <div className="one-line">
                  <h4>HighSchool</h4>
                  <span>2008-2018</span>
                </div>
                <div className="college">
                  Modern highSchool (Eng Med), Shivajinagar Pune
                </div>
              </div>
            </div>

            <div className={tooggleState === 2 ? "active" : ""}>
              <i className="fa fa-history"></i>
              <h2>Work History</h2>
              <div className="one-line">
                <h3>Internship at TICKTECH IT Solution</h3>
              </div>
              <div className="college">
                I have completed Internship at TichTech IT solution as a web
                Devleoper. I worked with team directly in front-End development
                section. During my internship, I was able to develop my
                communication and problems solving skills. I particularly found
                direct interactions with real life problems and finding a
                solution to fix it. I believe the internship was valuable in
                developing my confidence
              </div>
            </div>

            <div className={tooggleState === 3 ? "active" : ""}>
              <i className="fa fa-code"></i>
              <h2>Coding Skills</h2>
              <div className="coding-container">
                <div className="display-skills">
                  <div className="division-1">
                    <div className="coding-skills">
                      <h4>Python</h4>
                      <div className="progress">
                        <div className="python">
                          <span>95%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>React JS</h4>
                      <div className="progress">
                        <div className="react">
                          <span>85%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>JavaScript</h4>
                      <div className="progress">
                        <div className="javascript">
                          <span>86%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>HTML</h4>
                      <div className="progress">
                        <div className="html">
                          <span>89%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>CSS</h4>
                      <div className="progress">
                        <div className="css">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="division-2">
                    <div className="coding-skills">
                      <h4>JAVA</h4>
                      <div className="progress">
                        <div className="java">
                          <span>88%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>C</h4>
                      <div className="progress">
                        <div className="c">
                          <span>90%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>c++</h4>
                      <div className="progress">
                        <div className="cplus">
                          <span>87%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>ANDROID</h4>
                      <div className="progress">
                        <div className="android">
                          <span>93%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>DBMS</h4>
                      <div className="progress">
                        <div className="dbms">
                          <span>91%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={tooggleState === 4 ? "active" : ""}>
              <i className="fa fa-bar-chart"></i>
              <h2>Projects</h2>

              <div className="project">
                <h4>Portfolio Website Using React JS</h4>
              </div>
              <div className="project-college">
                <span>
                  Technologies Used : React JS, Bootstrap
                  <br />
                </span>
                A personal portfolio Website to showcase all my details and
                projects at one place.
              </div>

              <div className="project">
                <h4>
                  Aditi-The Virtual Assistant
                  <a href="https://clck.ru/ouVYN">
                    view
                  </a>
                </h4>
                <span>
                  <a href="https://clck.ru/ouVYN">
                    {" "}
                    view
                  </a>
                </span>
              </div>
              <div className="project-college">
                <span>
                  Technologies Used : python, Tkinter, pyqt5
                  <br />
                </span>
                A Virtual Assistant ahich can perform a lot of task on Voice
                Commands or in User Input mode.
              </div>

              <div className="project">
                <h4>
                  Automating Game using Hand Gestures
                  <a  href="https://clck.ru/sJdE4">
                    view
                  </a>
                </h4>
                <span>
                  <a  href="https://clck.ru/sJdE4">
                    {" "}
                    view
                  </a>
                </span>
              </div>
              <div className="project-college">
                <span>
                  Technologies Used : Opencv python
                  <br />
                </span>
                Enjoyed hill climb racing game by controlling it with my hand
                signals.
              </div>

              <div className="project">
                <h4>
                  Designing Different animation characters
                  <a  href="https://clck.ru/sJdKL">
                    view
                  </a>
                </h4>
                <span>
                  <a  href="https://clck.ru/sJdKL">
                    {" "}
                    view
                  </a>
                </span>
              </div>
              <div className="project-college">
                <span>
                  Technologies Used : Python Turtle Graphics
                  <br />
                </span>
                In this project, I have Designed well know cartoon characters
                using python.
              </div>
            </div>

            <div className={tooggleState === 5 ? "active" : ""}>
              <i className="fa fa-heart"></i>
              <h2>Interests</h2>
              <div className="interest">
                <div className="dot">
                  <h4>Teaching</h4>
                </div>
              </div>
              <div className="interest-description">
                Apart from being tech devotee and a code essayist, I likewise
                love to teach people what I know simply because I believe in
                sharing.
              </div>

              <div className="interest">
                <div className="dot">
                  <h4>Cycling</h4>
                </div>
              </div>
              <div className="interest-description">
                Cycling empowers me to determine delight and goes far in
                guaranteeing my general wellness safeguarding me from serious
                illnesses, for example, stroke, respiratory failure and gloom.
              </div>

              <div className="interest">
                <div className="dot">
                  <h4>Trekking</h4>
                </div>
              </div>
              <div className="interest-description">
                Trekking develops my actual wellbeing monstrously, exploring the
                rich flora and fauna exploring local cultures and local food
                which energizes me the most.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
