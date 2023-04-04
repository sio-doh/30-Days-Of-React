// Exercises: What is React?
// 1. What is React?
// React is a popular JavaScript library for building user interfaces. 
// It allows developers to create reusable UI components and manage their state, making
// building dynamic interfaces more efficient.

// 2. What is a library? 
// A library is a collection of pre-written code or a set of functions or methods that 
// perform specific tasks.

// 3. What is a single page application?
// SPA is a web app operating within a single web page which offers a more responsive user 
// experience. Instead of loading separate web pages for each interaction, 
// content gets dynamically updated on the same page without needing a full page reload. 

// 4. What is a component? 
// A modular, reusable piece of UI.

// 5. What is the latest version of React?
// 17.0.2 - as of April 2023.

// 6. What is DOM?
// The data representation of objects comprising the structure and content of a document on 
// the web. 

// 7. What is React Virtual DOM?
// An in-memory representation of the actual DOM utilised by React for improving web app 
// performance.

// 8. What does a web application or a website(composed of) have?
// Client-side is composed of HTML, CSS and JavaScript. Server-side code may be written in 
// PHP, Python, Java etc as well as a database for storing and retrieving data (e.g. MongoDB, 
// PostgreSQL).

// Exercises: Why React?
// 1. Why did you chose to use react?
// Many roles advertise for React knowledge and exposure, the React ecosystem is huge and the 
// community is very active, there are are so many learning resources.

// 2. What measures do you use to know popularity ?
// StackOverflow and GitHub

// 3. What is more popular, React or Vue ?
// According to Stack Overflow, React is more searched in comparison to Vue. Most sites 
// usually state at least 40% of developers use React, for example, 
// https://userguiding.com/blog/angular-react-vue/#:~:text=The%20number%20of%20currently%20live,today%20were%20created%20with%20Angular.

// Exercises: JSX
// 1. What is an HTML element? 
// An element is the basic building block of a webpage.

// 2. How to write a self closing HTML element? 
<input type="text" name="username" placeholder="Enter your username" />
<br />

// 3. What is an HTML attribute? Write some of them
<p class="example-paragraph">This is an example paragraph</p>

// 4. What is JSX? 
// JavaScript XML is a syntax extension which allows you to write HTML-like syntax in JavaScript.
// This makes it easier to read and write React components. 

// 5. What is babel?
// A JavaScript compiler that transforms ES6 plus JavaScript code into earlier versions of JavaScript. 

// 6. What is a transpiler?
// A compiler which takes source code in one programming lanauge and converts it into source code in 
// another programming language, whilst preserving the code behaviour.

// Exercises: JSX Elements
// 1. What is a JSX element?
// A Javascript expression representing a HTML element or a React component. 

// 2. Write your name in a JSX element and store it in a name variable
const name = <h1>Siobhan Doherty</h1>;

// 3. Write a JSX element which displays your full name, country, title, gender, email, phone number. Use 
// h1 for the name and p for the rest of the information and store it in a user variable
const user = (
    <div>
        <h1>Siobhan Doherty</h1>
        <p>Ireland</p>
        <p>Software Engineer</p>
        <p>Female</p>
        <p>notmyemail@email.com</p>
        <p>+353 0123456789</p>
    </div>
);

// 4. Write a footer JSX element
const Footer = () => {
    return (
        <footer>
            <p>&copy; All rights reserved.</p>
        </footer>
    );
};

// Exercises: Inline Style
// 1. Create a style object for the main JSX
const Main = () => {
    const styles = {
        fontFamily: "Montserrat",
        height: "100%",
        lineHeight: "1.5",
        fontWeight: "300",
        color: "black"
    };
    return (
        <div style={styles}>
            <h1>Hello World!</h1>
            <p>This is a main object</p>
        </div>
    );
};

// 2. Create a style object for the footer and app JSX
const Footer = () => {
    return (
        <footer style={{ color: "#fff", textAlign: "center" }}>
            <p>&copy; All rights reserved.</p>
        </footer>
    );
};

const app = ( 
    <div style={{ backgroundColor: "red"}}>
        <Footer />
    </div>
);

// 3. Add more styles to the JSX elements 
const styles = {
    fontFamily: "Montserrat", 
    height: "100%", 
    lineHeight: "1.5", 
    fontWeight: "300", 
    color: "black", 
    backgroundColor: "black", 
    padding: "20px", 
    borderRadius: "10px"
};

const App = () => {
    return (
        <div style={styles}>
            <h1 style={{ fontSize: "36px" }}>XYZ labs</h1>
            <p style={{ fontStyle: "italic" }}>Hello there!</p>
        </div>
    );
};

// Exercises: Internal Styles
// 1. Apply different styles to your JSX elements 

<!DOCTYPE html>
<html lang="en">
    <head>
        <style>
            .app {
                font-family: "Montserrat";
                height: 100%;
                line-height: 1.5;
                font-weight: 300;
                color: black;
            }
        </style>
    </head>
    <body>
        <div class="root"></div>
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> 
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel">
            {/* to get root element from HTML document  */}
            const rootElement = document.querySelector(".root")
            const app = (
                <div className="app">Further example styles for internal styling.</div>
            );
            {/* We render JSX element using ReactDOM package  */}
            {/* ReactDOM has render method & render method takes 2 arguments  */}
            ReactDOM.render(app, rootElement)
        </script>
    </body>
</html>

// Exercise: Inject data to JSX
// 1. Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object) 

<!DOCTYPE html>
<html lang="en">
    <body>
        <div class="root"></div>
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> 
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel"> 
            const exampleString = () => {
                const name = prompt("What is your name:");
                return (
                    <h1>{name}</h1>
                );
            };    
            const exampleNumber = () => {
                const age = prompt("What is your age:");
                return ( 
                    <h1>{age}</h1>
                );
            };
            const exampleBoolean = () => {
                const irish = true;
                return ( 
                    <p>{irish ? "Irish" : "Not Irish, different nationality"}</p> 
                );
            };
            const exampleArray = () => {
                const skills = ["javascript", "cloud", "python"];
                return ( 
                    <p>{`Skills: ${skills.join(",")}`}</p> 
                );
            };
            const exampleObject = () => {
                const pet = {
                    petName: "Guinness",
                    breed: "Sheepdog", 
                    age: 5,
                };
                return ( 
                    <div>
                        <p>{`Pet name: ${pet.petName}`}</p>
                        <p>{`Pet breed: ${pet.breed}`}</p>
                    </div> 
                );
            };
            {/* to get root element from HTML document  */}
            const rootElement = document.querySelector(".root")
            const app = (
                <div className="app">
                    {exampleString()}
                    {exampleNumber()}
                    {exampleBoolean()}
                    {exampleArray()}
                    {exampleObject()}
                </div>
            );
            {/* We render JSX element using ReactDOM package  */}
            {/* ReactDOM has render method & render method takes 2 arguments  */}
            ReactDOM.render(app, rootElement)
        </script>
    </body>
</html>