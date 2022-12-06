import React from "react";
import "./ExerciseOne.css";

let num = [];
for (let i = 0; i < 32; i++) {
  num.push(i);
}

// Header of This exercise Title
const Header = () => (
  <h1 style={{ fontSize: "45px", textAlign: "center" }}>30 Days of React</h1>
);

// Subtitle of this exercise title
const Subtitle = () => (
  <p style={{ fontSize: "24px", textAlign: "center" }}>Number Generator</p>
);

// backgroundColor: "#f39c12","#e74c3c"
const Isprime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

// Number box
const Numberbox = ({ num }) => {
  console.log(num);
  let numLoop = num.map((i) =>
    i !== 2 && i % 2 == 0 ? (
      <div className="numbox" key={i} style={{ backgroundColor: "#2ecc71" }}>
        {i}
      </div>
    ) : Isprime(i) ? (
      <div className="numbox" key={i} style={{ backgroundColor: "#e74c3c" }}>
        {i}
      </div>
    ) : (
      <div className="numbox" key={i} style={{ backgroundColor: "#f39c12" }}>
        {i}
      </div>
    )
  );
  return <div className="main">{numLoop}</div>;
};

const ExerciseOne = () => {
  return (
    <div>
      <Header />
      <Subtitle />
      <Numberbox num={num} />
    </div>
  );
};

export default ExerciseOne;
