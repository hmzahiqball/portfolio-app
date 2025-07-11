import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import qurrency from "../../Assets/Projects/qurrency.png";
import todo from "../../Assets/Projects/todo.png";
import tele from "../../Assets/Projects/tele.png";
import kalkulator from "../../Assets/Projects/kalkulator.png";
import pos from "../../Assets/Projects/pos.png";
import quran from "../../Assets/Projects/quran.png";
import api from "../../Assets/Projects/api.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import movielist from "../../Assets/Projects/movielist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quran}
              isBlog={false}
              title="Quran App Project"
              description="This open-source Quran app is the perfect foundation for building a beautifully designed, feature-rich Islamic application. Whether you're learning, exploring, or planning to deploy, this project gives you a solid head start."
              ghLink="https://github.com/hmzahiqball/flutter-quran-v2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pos}
              isBlog={false}
              title="Point of Sale (POS) Frontend — Laravel (Web)"
              description="This is the frontend project for a Laravel-based Point of Sale (POS) application. It consumes a REST API provided by the backend available at: https://github.com/putra28/Ujikom-API."
              ghLink="https://github.com/hmzahiqball/Ujikom-POS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="Point of Sale (POS) Backend API - (Express.js + MySQL)"
              description="This is the backend REST API for the Point of Sale (POS) application, built with Node.js and Express.js. It serves the Laravel-based frontend for both web and desktop (Electron) versions."
              ghLink="https://github.com/hmzahiqball/Ujikom-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tele}
              isBlog={false}
              title="🎬 FreeVideoDownloderBot - Telegram Bot for Media Downloads"
              description="FreeVideoDownloderBot is a feature-rich Telegram bot built in Python, designed to make video and photo downloads effortless. It supports a wide range of platforms and formats with high-quality options, designed for speed and privacy."
              ghLink="https://github.com/hmzahiqball/freevideodownloader-telebot"
              demoLink="https://t.me/FreeVideoDownloderBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="🌤️ Flutter Weather App"
              description="A simple yet powerful weather forecasting application built using Flutter, design inspired by Infinix weather App, fetching real-time data from Open-Meteo and IP-based location detection using ip-api.com."
              ghLink="https://github.com/hmzahiqball/weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movielist}
              isBlog={false}
              title="🎬 FilmScape Movie App"
              description="FilmScape is a solo passion project, built as part of a modern dev portfolio. It pulls data from [The Movie Database (TMDB)](https://www.themoviedb.org/) to show you all the spicy info about movies & TV shows — from what’s trending to what’s dropping soon."
              ghLink="https://github.com/hmzahiqball/movielist-app"
              demoLink="https://put-movielist.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kalkulator}
              isBlog={false}
              title="🧮 Flutter Basic Calculator"
              description="A simple and clean basic calculator app built with Flutter. This application supports essential arithmetic operations and includes both light and dark themes, allowing users to switch according to their preference."
              ghLink="https://github.com/hmzahiqball/Flutter-calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qurrency}
              isBlog={false}
              title="📝 To-Do List App"
              description="A simple yet complete To-Do List application, designed to help you manage your daily tasks efficiently. This app now includes powerful features like checklists, task priorities, filtering, reminders, and a mini calendar — all added without changing the familiar look and feel of the original interface."
              ghLink="https://github.com/hmzahiqball/todolist-react"
              demoLink="https://put-todolist.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="💱 Currency Exchange Rate Viewer"
              description="A React-based application that displays foreign exchange rates in an interactive table format using react-data-table-component. The app supports both static data from a local file and live data from the exchangerate-api.com API."
              ghLink="https://github.com/hmzahiqball/exchange-app"
              demoLink="https://put-exchangerate.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
