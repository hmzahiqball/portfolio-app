import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a high school grad who accidentally fell in love with programming — and now I can’t stop writing code. 
              It started with a few lines of HTML and suddenly I’m debugging backend logic at 2 AM wondering where my weekend went. 😅
              <br />
              <br />I work as a <b className="purple">Fullstack Developer</b> by day, 
              fluent in frontend magic like
              <i>
                <b className="purple"> React.js and Flutter</b>
              </i>, and pretty handy on the backend with 
              <i>
                <b className="purple"> Node.js, Laravel, and MySQL.</b>
              </i>
              <br />
              <br />
              Lately, I’ve been diving deeper into 
              <i>
                <b className="purple"> Python </b>
              </i>
               and 
              <b className="purple"> Machine Learning</b>, 
              because apparently sleep is optional when curiosity kicks in 🧠💻.
              <br />
              <br />
              Outside of work, I still have some free time, which is why I’m open to 
              <b className="purple"> freelance or remote projects. </b>
              I love collaborating on exciting ideas, solving real problems, and bringing cool products to life with awesome people.
              <br />
              <br />
              If you’ve got something in mind,  
              <b className="purple"> let’s talk! </b>🚀✨
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hmzahiqball"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ptrasyprtma/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
