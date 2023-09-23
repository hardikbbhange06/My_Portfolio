import React, { u, useEffect, useState } from "react";
import { Button } from "antd";
import "./Introduction.css";
import { Box, Container, Paper } from "@mui/material";
// import Contact from "../Contact";
import boy1 from "../IMG/boy-1.jpg"

const Introduction = () => {
  const [text, setText] = useState("Developer");

  const textLoad = () => {
    setTimeout(() => {
      setText("Developer");
    }, 0);
    setTimeout(() => {
      setText("Designer");
    }, 4000); 
     setTimeout(() => {
      setText("Front-End Developer");
    }, 8000);
    // setTimeout(() => {
    //   setText("Freelancer");
    // }, 8000);
  };

  useEffect(() => {
    textLoad();
    const intervalId = setInterval(textLoad, 12000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // ---------------------------------

  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
    if (!showContact) {
      // Scroll to the Contact section when Subscribe is clicked
      const contactElement = document.getElementById('contact');
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // -------------------------------

  return (
    <section id="introduction">
    <>
      <Box
        sx={{
          display: "flex",
          // justifyContent:"center",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            // width: "100%",
            // height: 128,
          },
        }}
      >
        {/* <Paper elevation={0} /> */}
        <Paper elevation={0}>
          <div className="h-text">
            <div className="h-animate">
              <span className="text first-text">
                Hello, I'm Hardik Bhange. &nbsp;
              </span>
              <br />
              <span className="text first-text">I'm a &nbsp;</span>
              <span className="text sec-text"> {text}</span>
            </div>
          </div>
        </Paper>

        <Paper elevation={0}>
          <div>
            <div class="container">
              <div class="box">
                <div class="content">
                  <img
                    src={boy1}
                    alt=""
                  />
                  <h2>
                   HARDIK <br /> <span>Front-End Developer</span>
                  </h2>
                  <a href="#" onClick={handleContactClick}>
                  Contact
                  </a>{" "}
                </div>
              </div>
            </div>
            {/* {showContact && <Contact />} */}
          </div>
        </Paper>
      </Box>
      <Container>
      <Paper>
        <div className="container-p11">
          <Container>
            <h1>
              <p>
                Skilled and goal-oriented React JS and Java developer with
                expertise in web development. Proficient in HTML, CSS,
                JavaScript, and RESTful APIs. Strong collaboration and
                problem-solving skills. Actively seeking opportunities to
                contribute and grow.
              </p>
            </h1>
          </Container>
        </div>
      </Paper>
      </Container>
      
      </>
    </section>
  );
};

export default Introduction;
