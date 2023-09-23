import React from "react";
import styled, { keyframes } from "styled-components";
import "./Contact.css";
import { Box, Container } from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import Resume from "../IMG/HBhangeSDqspRE0600_page-1.jpg";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowDown,
} from "react-icons/ai";

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

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        marginTop: "95px",
      }}
    >
      <div  >
        <div>
          <AnimatedGradientText>
            Contact Me
            <span>
              <p>
                If you are interested to hire me I am always open to new
                opportunities and interesting projects! Feel free to contact me
                if you have any other requests or questions regarding web
                development.
              </p>
            </span>
          </AnimatedGradientText>
        </div>
      </div>

      <>
        <Container>
          <div class="card-cont-55">
            {/*  */}

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                "& > :not(style)": {
                  m: 8,
                  width: "250px",
                  height: "250px",
                },
              }}
            >
              <div className="contact__options1">
                <article className="contact__option1">
                  <MdOutlineEmail className="contact__option-icon1" />
                  <h4>Email</h4>
                  <h5>hardikbbhange06@gmail.com</h5>
                  {/* <a href="mailto:hardikbbhange06@gmail.com">Send a message</a> */}

                  <a
                    href="mailto:hardikbbhange06@gmail.com"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {/* Send a message */}

                    <button className="cssbuttons-io-button ">
                      {/* <a href="mailto:hardikbbhange06@gmail.com"> */}
                      HIRE ME
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </a>
                </article>
              </div>
              <div className="contact__options1">
                <article className="contact__option1">
                  <AiFillLinkedin className="contact__option-icon1" />

                  <h4>LinkedIn</h4>
                  {/* <h5>hardikbbhange06@gmail.com</h5> */}
                  {/* <a href="mailto:hardikbbhange06@gmail.com">Send a message</a> */}

                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/hardik-sd/"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {/* Send a message */}

                    <button
                      className="c-button c-button--gooey"
                      style={{ borderRadius: "50px" }}
                    >
                      Connect
                      <div className="c-button__blobs">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <svg
                        version="1.1"
                        style={{ display: "block", height: 0, width: 0 }}
                      >
                        <defs>
                          <filter id="goo">
                            <feGaussianBlur
                              in="SourceGraphic"
                              stdDeviation="10"
                              result="blur"
                            ></feGaussianBlur>
                            <feColorMatrix
                              in="blur"
                              mode="matrix"
                              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                              result="goo"
                            ></feColorMatrix>
                            <feBlend in="SourceGraphic" in2="goo"></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </button>
                  </a>
                </article>
              </div>
              <div className="contact__options1">
                <article className="contact__option1">
                  <AiFillGithub className="contact__option-icon1" />
                  <h4>Github</h4>
                  <h5>hardikbbhange06</h5>
                  {/* <a href="mailto:hardikbbhange06@gmail.com">Send a message</a> */}

                  <a
                    target="_blank"
                    href="https://github.com/hardikbbhange06?tab=repositories"
                  >
                    {/* Connect */}

                    <button className="button-har-656565">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                          fill="white"
                        ></path>
                      </svg>
                      <p className="text" style={{ color: "#fff" }}>
                        Repositories
                      </p>
                    </button>
                  </a>
                </article>
              </div>
              <div className="contact__options1">
                <article className="contact__option1">
                  <AiOutlineArrowDown className="contact__option-icon1" />
                  <h4>Resume/CV</h4>
                  {/* <h5>hardikbbhange06@gmail.com</h5> */}
                  {/* <a href="mailto:hardikbbhange06@gmail.com">Send a message</a> */}

                  <a
                    target="_blank"
                    href={Resume}
                    //  href="https://drive.google.com/file/d/1Bqke1NpasaBQ89iRKwvHolOpu23yl2rv/view?usp=sharing"
                    download
                  >
                    {/* Send a message */}

                    <div
                      className="button-554-hard"
                      //  data-tooltip="Download Resume"
                    >
                      <div className="button-554-hard-wrapper">
                        <div className="text-har4545">Download</div>
                        <span className="icon-hard458">
                          <svg
                            aria-hidden="true"
                            role="img"
                            width="2em"
                            height="2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              </div>
            </Box>

            {/*  */}

            {/* <p class="heading-cont-55">Email: your.email@example.com</p>
        <p class="heading-cont-55">LinkedIn: linkedin.com/in/your-profile</p>
        <p class="heading-cont-55">GitHub: github.com/your-username</p> */}

            {/* <p>Personal Website: your-website.com</p> */}
          </div>
        </Container>
      </>
    </section>
  );
};

export default Contact;
