import React, { Suspense } from "react";
import "./ExerciseTwo.css";

// Header of this component
const Header = () => (
  <h1 style={{ fontSize: "65px", textAlign: "center" }}>30 Days of React</h1>
);

// Subtitle for this component
const Subtitle = () => (
  <p style={{ fontSize: "24px", textAlign: "center" }}>Hexadecimal Colors</p>
);

// JSX context for random color picker
const Colortheme = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  let compound = "#" + color;
  return (
    <div style={{ backgroundColor: compound }} className="colorbox">
      {compound}
    </div>
  );
};

// Num loop
const num = [];
for (let i = 0; i < 32; i++) {
  num.push(i);
}

// looping number box with color theme
const LoopingBox = ({ num }) => {
  let listedNum = num.map((i) => <Colortheme key={i} />);
  return (
    <>
      <div className="headBox">{listedNum}</div>
    </>
  );
};

const ExerciseTwo = () => {
  return (
    <div>
      <Header />
      <Subtitle />
      <LoopingBox num={num} />
    </div>
  );
};

export default ExerciseTwo;
