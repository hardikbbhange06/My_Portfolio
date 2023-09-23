import React from "react";
import "./WorkExperience.css";
import { Box, Card, Container } from "@mui/material";
import styled, { keyframes } from "styled-components";

// -------------------
const hue = keyframes`
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
`;

const AnimatedGradientText = styled.h1`
  color: #ff5e00;
  background-image: linear-gradient(92deg, #ff5e00, #ffcc2a);
  background-clip: text;
  text-fill-color: transparent;
  animation: ${hue} 5s infinite linear;
  font-family: Arial, sans-serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  text-rendering: optimizeLegibility;
`;

// -------------

const workExperienceData = [
  {
    company: "Lejhro Technology Pvt. Ltd.",
    role: "Trainee: React Js Developer",
    experience: "4 month",
  },
  {
    company: "English Helper Education Technologies Pvt. Ltd.",
    role: "Intern: Java Developer",
    experience: "3 month",
  },
  {
    company: "QSpiders",
    role: "Training: Java full-stack developer",
    experience: "8 month",
  },
  
];

const WorkExperience = () => {
  return (
    <>
      <section id="work-experience">
        <div>
          <div>
            <AnimatedGradientText>Work Experience</AnimatedGradientText>
          </div>
        </div>

        <Container>
          <span className="card-har-12">
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyItems: "center",
                justifyContent: "center",
                justifyContent: "space-between",

                "& > :not(style)": {
                  m: 1,
                  // width: 128,
                  // height: 128,
                },
              }}
              style={{ display: "flex" }}
            >
              {workExperienceData.map((entry, index) => (
                <span className="card11-har" key={index}>
                  <h3> {entry.company}</h3>
                  <h2>Role: {entry.role}</h2>
                  <p className="small">Experience: {entry.experience}</p>
                  <div className="go-corner">
                    <div className="go-arrow">🥷</div>
                  </div>
                </span>
              ))}
            </Box>
          </span>
        </Container>
      </section>
    </>
  );
};

export default WorkExperience;
