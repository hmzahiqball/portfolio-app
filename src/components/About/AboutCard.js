import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey!!, I am <span className="purple">Putra Suyapratama </span>
            from <span className="purple"> Bandung, Indonesia.</span>
            <br />
            Currently, I’m rocking the fullstack developer life at PT Raharja Sinergi Komunikasi.
            <br />
            <br />
            When I’m not coding away, you’ll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing soccer ⚽ (trying not to trip over my own feet)
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling ✈️ (because new places = new snacks)
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming 🎮 (leveling up in life and in games)
            </li>
            <li className="about-activity">
              <ImPointRight /> Mukbang sessions 🍜 (yes, I eat a lot, but hey, someone’s gotta do it!)
            </li>
          </ul>

          
          <p style={{ textAlign: "justify" }}>
            Here’s a random quote for you:
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            “If at first you don’t succeed, call it version 1.0.” 😄{" "}
          </p>
          <footer className="blockquote-footer">Putra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
