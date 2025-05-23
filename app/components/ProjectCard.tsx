"use client"

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardImgOverlay from "react-bootstrap/CardImgOverlay";
import CardText from "react-bootstrap/CardText";
import CardTitle from "react-bootstrap/CardTitle";

type ProjectCardProps = {
  imgSrc: string,
  projectName: string,
  projectDescription: string,
  href: string,
  prefersDark?: boolean,
};

const ProjectCard = ({ imgSrc, projectName, projectDescription, href, prefersDark = false }: ProjectCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const imgSrcFull = imgSrc + (prefersDark ? "-dark.svg" : "-light.svg")

  return (
    <Card
      onMouseEnter={() => { setIsHovering(true) }} onMouseLeave={() => { setIsHovering(false) }}
      bg={prefersDark ? "dark" : "light"}
      text={prefersDark ? "light" : "dark"}
    >
      <CardImg src={imgSrcFull} alt={"Image of " + projectName} />
      <CardImgOverlay
        className={isHovering ? "visible" : "visually-hidden-focusable"}
        style={{
          "backgroundColor": prefersDark ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)",
        }}
      >
        <CardTitle>{projectName}</CardTitle>
        <CardText>{projectDescription}</CardText>
        <div className="text-center">
          <Button variant="primary" href={href}>See More</Button>
        </div>
      </CardImgOverlay>
    </Card>
  )
};

export default ProjectCard;
