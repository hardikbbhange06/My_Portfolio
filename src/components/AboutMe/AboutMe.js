import React from "react";
import styled, { keyframes } from "styled-components";
import MyImage from "../IMG/boy-2.jpg";
import Resume from "../IMG/HBhangeSDqspRE0600_page-1.jpg";
import { CardMedia } from '@mui/material';
// import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  // CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import "./AboutMe.css";

// ---------------------top-text

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

// ------------------------------------------

const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  max-width: 300px;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const AboutMe = () => {
  return (
    <section id="about-me">
      <>
        <>
          <div>
            <AnimatedGradientText>About Me</AnimatedGradientText>
          </div>
        </>
      </>

      <div className="yourself">
        <>
          <Card
            elevation={0}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
             <div>
      <StyledCardMedia
        component="img"
        image={MyImage}
        alt="Live from space album cover"
      />
    </div>
            {/* <div >
              <img src={MyImage} alt="" />
            </div> */}
            <Box
              // className="box"
              sx={{
                display: "flex",
                // flexDirection: "column",
                width: "50%",
                // padding: "20px",
                paddingRight: "30px",
                textAlign: "center",
                "@media (max-width: 600px)": {
                  width: "100%",
                },
              }}
            >
              <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
                <Typography
                  component="div"
                  variant="h5"
                  className="container-p12"
                >
                  <p>
                    I am Hardik Bhange, a motivated individual with a background
                    in Engineering from G. H. Raisoni Academy Of Engineering And
                    Technology, Nagpur. I have practical experience as a React
                    JS Developer and Java Developer, having worked on various
                    projects during my internships and training. My passion for
                    technology and coding drives me to continuously improve and
                    innovate in the field of web development.
                  </p>
                </Typography>
                <div
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <>
                    <a
                      href={Resume}
                      rel="noreferrer"
                      target="_blank"
                      className="custom-button"
                    >
                      View Resume
                    </a>
                  </>{" "}
                </div>
              </CardContent>
            </Box>
          </Card>
        </>
      </div>
    </section>
  );
};

export default AboutMe;
