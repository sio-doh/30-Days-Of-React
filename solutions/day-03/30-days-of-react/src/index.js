// importing the react and react-dom package
import React from "react";
import ReactDOM from "react-dom"; 
import Asabeneh from "./images/Asabeneh.jpg";

// JSX element, header
const welcome = "Welcome to 30 Days of React";
const title = "Getting Started With React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Siobhan",
  lastName: "Doherty",
}
const date = "May 2, 2023";

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2> 
      <h3>{subtitle}</h3>
      <p>Instruction: {author.firstName} {author.lastName}</p> 
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3; 
const numTwo = 2;
const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main 
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>); 
const user = (
  <div>
    <img src={Asabeneh} alt="Asabeneh img" />
  </div>
)

// JSX element, main 
const main = (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started with {' '}
        <strong>
          <em>React.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge} 
      {user}
    </div>
  </main>
)

// JSX element, footer 
const copyright = "Copyright 2023";
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyright}</p>
    </div>
  </footer>
)

// JSX element, app, 
const app = (
  <div className="app">
    {header}
    {main} 
    {footer}
  </div>
)

// render JSX element using ReactDOM package
// ReactDOM has render method and render method takes two arguments
const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);

