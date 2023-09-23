import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Container, Grid } from "@mui/material";
import styled, { keyframes } from "styled-components";
import "./Projects1.css";
import bootcamp_lejhro from '../IMG/bootcamp_lejhro.png'; 
import repositories from '../IMG/repositories.png'; 


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

const item = [
  {
    label: "Online Bootcamp",
    link1: "https://www.bootcamp.lejhro.com/",
    link2: "https://github.com/hardiklejhro06",
    imgPath:bootcamp_lejhro,
  },
  {
    label: "Github",
    link1: "https://github.com/hardikbbhange06?tab=repositories",
    link2: "https://github.com/hardikbbhange06?tab=repositories",
        imgPath:
        repositories,
  },
  // {
  //   label: "San Francisco – Oakland Bay Bridge, United States",
  //   link1: "https://example.com/project1",
  //   link2: "https://example.com/project1_alternate",  
  //     imgPath:
  //     "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  // },
  // {
  //   label: "Goč, Serbia",
  //   link1: "https://example.com/project1",
  //   link2: "https://example.com/project1_alternate", 
  //      imgPath:
  //     "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  // },
];

const Projects1 = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = item.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <section id="Projects">
        <div>
          <div>
            <AnimatedGradientText>Projects</AnimatedGradientText>
          </div>
        </div>
        <>
          <Container>
            <div className="card"
            style={{
              // height:"100%",
            }}>
              <Box
                className="bg"
                sx={{
                  flexGrow: 1,
                  // border: "2px solid red",
                  padding: "15px",
                  // height:"100%",
                 
                }}
              >
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                  style={{
                    border: "2px solid green",
                  }}
                >
                  {item.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Card
                          style={{
                            // border: "2px solid red",
                            // padding: "10px",
                            margin: "15px",
                            position: "relative",
                          }}
                        >
                          <Container>
                            <CardMedia
                              component="img"
                              alt={step.label}
                              height="320"
                              image={step.imgPath}
                              className="card-media-img"
                            />
                            <CardContent>
                              <h1 variant="h5" component="div">
                                <>{step.label}</>
                              </h1>
                              <div style={{
                                display:"flex",
                                justifyContent:"space-between",
                              }}>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  href={step.link1}
                                  target="_blank"
                                >
                                  Live Project
                                </Button>
                                <Button
                                  variant="outlined"
                                  color="secondary"
                                  href={step.link2}
                                  target="_blank"
                                >
                                  Repository
                                </Button>
                              </div>
                            </CardContent>
                          </Container>
                        </Card>
                      ) : null}
                    </div>
                  ))}
                </SwipeableViews>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Box>
              <div className="blob"></div>
            </div>
          </Container>
        </>
      </section>
    </>
  );
};

export default Projects1;
