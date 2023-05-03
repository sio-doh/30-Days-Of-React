import React from "react";
import ReactDOM from "react-dom"; 
import asabeneh from "./images/Asabeneh.jpg"; 
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const image = (
  <div>
    <img src={asabeneh} alt="Asabeneh img" style={{ height: "225px", borderRadius: 150, marginLeft: 5 }} />
  </div>
);
const user = (
  <h2>
    ASABENEH YETAYEH <BsCheckCircleFill style={{ backgroundColor: "#"  , color: "#40E0D0", marginLeft: 10, borderRadius: 10 }} className="bscheckcircle" />
  </h2>
);

const position = "Senior Developer, Finland";

const skillset = [
  "HTML", 
  "CSS", 
  "Sass", 
  "JS", 
  "React", 
  "Redux", 
  "Node", 
  "MongoDB", 
  "Python", 
  "Flask", 
  "Django", 
  "NumPy", 
  "Pandas", 
  "Data Analysis", 
  "MYSQL", 
  "GraphQL", 
  "D3.JS", 
  "Gatsby", 
  "Docker", 
  "Heroku", 
  "Git"
];

const skills = skillset.map((skill, index) => <p key={index}>{skill}</p>);

const date = <p><AiOutlineClockCircle style={{ paddingRight: 10 }} />Joined on Aug 30, 2020</p>;

const ErrorBoundary = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const app = (
  <ErrorBoundary>
    <div className="app">
      <div className="content">
        {image}
        <p style={{ color: "#000000", marginLeft: 10 }}>{user}</p>
        <p style={{ marginLeft: 10, fontWeight: 1000 }}>{position}</p>
      </div>
      <div style={{ display: "flex", marginLeft: 10 }}> 
        <h2>SKILLS</h2>
        <div 
          className="skillset"
          style={{ 
            padding: 5,
            margin: 10,
            border: "2px solid #40E0D0",
            borderRadius: 10,
            background: "#40E0D0",
            color: "white",
          }}
        >
          {skills}</div>
      </div>
      <footer>
        <div 
          style={{
            marginLeft: 10,
            display: "flex",
            alignItems: "center",
          }}
        >{date}</div>
      </footer>
    </div>
  </ErrorBoundary>
);

const rootElement = document.getElementById("root"); 
ReactDOM.render(app, rootElement);

export default ErrorBoundary;