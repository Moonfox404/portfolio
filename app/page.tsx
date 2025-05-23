"use client"

import styles from "./page.module.css";
import PortfolioNavbar from "./components/PortfolioNavbar";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Home() {
  const [prefersDark, setPrefersDark] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        if (mediaQuery.matches) {
            setPrefersDark(true);
        }

        // add event listener for if preference changes
        mediaQuery.addEventListener("change", (event) => setPrefersDark(event.matches));
    }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PortfolioNavbar/>
        <section id="about">
          <Container className="min-vh-100">
            <Row>
              <Col md="8">
                <h1 className="display-1 mt-5">Designer | Developer</h1>
                <div className="mt-5 mb-5">
                  <h2 className="mb-5">Who am I</h2>
                  <p>
                    I am a student with experience creating static and dynamic websites and applications. 
                    I've worked on product websites, mobile applications, and dashboards.
                  </p>
                  <p>
                    I am also a visual artist, and I enjoy opportunities to add a creative touch to designs to make them pop.
                  </p>
                </div>
                <div className="mt-5 mb-5">
                  <h2 className="mb-5">How I can help you</h2>
                  <p className="lead mb-5">
                    You have a unique idea or problem, and I want to give you a unique solution.
                  </p>
                  <p>
                    A typical workflow will involve a first meeting to discuss what you want from the project (features) 
                    and what you cannot live without for its visuals (aesthetic). 
                    I will create some initial designs based on our conversation and go through them with you 
                    to ensure they match your vision for the project.
                  </p>
                  <p>
                    It will not be a hands-off process. You can expect to be tired of hearing from me by the end 
                    (please be patient; my goal is to learn from you), 
                    but we will work together to create something that you can love.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="position-absolute start-50">
              <Button className="d-none d-lg-block" href="#projects">&#8964;</Button>
            </div>
          </Container>
        </section>
        <section id="projects">
          <Container className="fluid">
            <h1 className="display-3" style={{"paddingTop": "10%", "paddingBottom": "2%"}}>Projects</h1>
            <Row xs={1} md={2} className="g-4">
              <Col>
                <ProjectCard
                  projectName="Service Site"
                  projectDescription="A website to advertise services provided by a business"
                  href="/coming-soon"
                  imgSrc="/service-placeholder"
                  prefersDark={prefersDark}
                />
              </Col>
              <Col>
                <ProjectCard
                  projectName="Game"
                  projectDescription="A simple game which runs on web browsers"
                  href="/coming-soon" 
                  imgSrc="/game-placeholder"
                  prefersDark={prefersDark}
                />
              </Col>
              <Col>
                <ProjectCard
                  projectName="E-Commerce Site"
                  projectDescription="A website for a business to sell its products online"
                  href="/coming-soon" 
                  imgSrc="/ecommerce-placeholder"
                  prefersDark={prefersDark}
                />
              </Col>
              <Col>
                <ProjectCard
                  projectName="Analytics Site"
                  projectDescription="A dashboard for anlysts to view data"
                  href="/coming-soon" 
                  imgSrc="/analytics-placeholder"
                  prefersDark={prefersDark}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section id="contact">
          <Container>
            <h1 className="display-2" style={{"paddingTop": "10%", "paddingBottom": "2%"}}>I would love to work with you...</h1>
            <p className="mb-5">
              Briefly describe your idea for your project,
              and we can get in touch to work out the details.
            </p>
            <ContactForm prefersDark={prefersDark}/>
          </Container>
        </section>
      </main>
    </div>
  );
}
