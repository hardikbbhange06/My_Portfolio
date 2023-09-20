import { Container } from "@mui/material";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


import styled, { keyframes } from "styled-components";

// ----------------------------
import HTML5 from '../IMG/HTML5.png'; 
import CSS3 from '../IMG/CSS3.png'; 
import Java_Script from '../IMG/Java-Script.png';
import React_js from '../IMG/React.js.png'; 
import Next_js from '../IMG/Next-js.png'; 
import Git from '../IMG/Git.png'; 
import Visual_Studio_Code from '../IMG/Visual Studio Code.png'; 
import React_Bootstrap from '../IMG/React Bootstrap.png'; 
import Material_UI from '../IMG/Material UI.png'; 
import Ant_Design from '../IMG/Ant Design.png'; 
import Tailwindcss from '../IMG/Tailwindcss.png'; 

import Java from '../IMG/Java.png'; 
import Node_js from '../IMG/Node.js.png'; 
import MongoDB from '../IMG/MongoDB.png'; 
import Eclipse from '../IMG/Eclipse (IDE).png'; 
import Express_js from '../IMG/Express.js.png'; 
import IntelliJ_IDEA from '../IMG/IntelliJ IDEA (IDE).png'; 
import Postman from '../IMG/Postman.png'; 
import Spring from '../IMG/Spring.png'; 
// import HTML5 from '../IMG'; 


// ------------------------------------------
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

// -------------------------------
const itemData = [
  {
    id: 1,
    name: "HTML5",
    imageSrc: HTML5,
  },
  {
    id: 2,
    name: "CSS3",
    imageSrc: CSS3,
  },
  {
    id: 3,
    name: "Java-Script",
    imageSrc: Java_Script,
  },
  {
    id: 4,
    name: "React.js",
    imageSrc: React_js,
  },
  {
    id: 5,
    name: "Next.js",
    imageSrc: Next_js,
  },
  {
    id: 6,
    name: "Git",
    imageSrc: Git,
  },
  {
    id: 7,
    name: "Visual-Studio-Code",
    imageSrc: Visual_Studio_Code,
  },
  {
    id: 8,
    name: "React-Bootstrap",
    imageSrc: React_Bootstrap,
  },
  {
    id: 9,
    name: "Material-UI",
    imageSrc: Material_UI,
  },
  {
    id: 10,
    name: "Ant-Design",
    imageSrc: Ant_Design,
  },
  {
    id: 11,
    name: "Tailwindcss",
    imageSrc: Tailwindcss,
  },
  {
    id: 12,
    name: "Java",
    imageSrc: Java,
  },
  {
    id: 13,
    name: "Node.js",
    imageSrc: Node_js,
  },
  {
    id: 14,
    name: "MongoDB",
    imageSrc: MongoDB,
  },
  {
    id: 15,
    name: "Eclipse (IDE)",
    imageSrc: Eclipse,
  },
  {
    id: 16,
    name: "Express.js",
    imageSrc: Express_js,
  },
  {
    id: 17,
    name: "IntelliJ IDEA (IDE)",
    imageSrc: IntelliJ_IDEA ,
  },
  {
    id: 18,
    name: "Postman",
    imageSrc: Postman,
  },
  {
    id: 19,
    name: "Spring",
    imageSrc: Spring,
  },
  // {
  //   id: 20,
  //   name: "Item 2",
  //   imageSrc: "path_to_image_2.jpg",
  // },
  // Add more items as needed
];


const items = itemData.map((item) => (
  <div key={item.id} className="carousel-item">
    <img src={item.imageSrc} alt={item.name} />
    <h2>{item.name}</h2>
  </div>
));

// const frontendItems = itemData.slice(0, 5).map((item) => (
//   <div key={item.id} className="carousel-item">
//     <img src={item.imageSrc} alt={item.name} />
//     <h2>{item.name}</h2>
//     {/* <div>Frontend</div> */}
//   </div>
// ));

// const backendItems = itemData.slice(5, 10).map((item) => (
//   <div key={item.id} className="carousel-item">
//     <img src={item.imageSrc} alt={item.name} />
//     <h2>{item.name}</h2>
//     {/* <div>Backend</div> */}
//   </div>
// ));

// const items = frontendItems.concat(backendItems);


const styles = `
  .carousel-item img {
    max-width: 90%;
    height: 200px;
    display: block;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 50px;

  }
  .carousel-item h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
    color: #333;
    text-align: center;
  }
`;


const Skills = (count) => {
  return (
    <section id="skills">
      <div>
        <div>
          <AnimatedGradientText>My Skills</AnimatedGradientText>
        </div>
      </div>

      <div>
      <Container>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={{
            0: { items: 1 },
            768: { items: 3 },
            1024: { items: 5 },
          }}
          autoPlayInterval={2000}
          autoPlayDirection="ltr"
          autoPlay={true}
          fadeOutAnimation={true}
          disableAutoPlayOnAction={true}
          dotsDisabled={true}
          buttonsDisabled={true}
          infinite={true}
        />
        </Container>
      </div>
      <style>{styles}</style>

    </section>

  );
};

export default Skills;
