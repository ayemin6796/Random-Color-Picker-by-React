import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import ExerciseOne from "./Components/ExerciseOne";
import ExerciseTwo from "./Components/ExerciseTwo";

// Maping array of numbers
const Numbers = ({ numbers }) => {
  const numberList = numbers.map((i) => <li key={i}>{i}</li>);
  return numberList;
};

// Maping array of array
const skills = [
  ["HTML", 10],
  ["CSS", 8],
  ["JS", 6],
  ["React", 5],
];
const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech}
    {level}
  </li>
);

const Skills = ({ skills }) => {
  const skillList = skills.map((i) => (
    <ul>
      <Skill skill={i} key={i.level} />
    </ul>
  ));
  return skillList;
};

// Mapping array of objects
const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

const Country = ({ country: { name, city } }) => (
  <>
    <h1>{name}</h1>
    <small>{city}</small>
  </>
);

const Countries = ({ countries }) => {
  let countriesList = countries.map((i) => (
    <Country country={i} key={i.name} />
  ));
  return countriesList;
};
const App = () => {
  let numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>Array Map List</h1>
      <ul>
        <Numbers numbers={numbers} />
      </ul>
      <Skills skills={skills} />
      <Countries countries={countries} />
      <ExerciseOne />
      <ExerciseTwo />
    </>
  );
};

const RootElement = ReactDOM.createRoot(document.getElementById("root"));
RootElement.render(<App />);
