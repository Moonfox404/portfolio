"use client"

import { useState } from "react";
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
};

const ProjectCard = ({imgSrc, projectName, projectDescription, href}: ProjectCardProps) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Card onMouseEnter={() => {setIsHovering(true)}} onMouseLeave={() => {setIsHovering(false)}}>
            <CardImg src={imgSrc} alt={"Image of " + projectName} />
            <CardImgOverlay className={isHovering ? "visible" : "visually-hidden-focusable"}>
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
