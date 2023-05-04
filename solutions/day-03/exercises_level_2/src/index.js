import React from "react";
import ReactDOM from "react-dom"; 
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

const title = "SUBSCRIBE";
const tagline = "Sign up with your email address to receive news and updates";
const placeholder_one = "First Name";
const placeholder_two = "Last Name";
const placeholder_three = "Email";
const subscribe_button = "Subscribe";

const FrontEndTechnologies = () => {
    return (
        <div 
            className="frontend-container" 
            style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column", 
                justifyContent: "center", 
                margin: "0 auto", 
                width: "80%",
            }}
        >
            <h1 style={{ fontWeight: "bold", fontSize: "2rem", marginBottom: "2rem" }}>
                Front End Technologies
            </h1>
            <div className="icon-container">
                <FaHtml5 size={60} style={{ margin: "1rem" }}/>
                <FaCss3Alt size={60} style={{ margin: "1rem" }}/>
                <FaJsSquare size={60} style={{ margin: "1rem" }}/>
                <FaReact size={60} style={{ margin: "1rem" }}/>
            </div>
        </div>
    );
};

const app = (
    <div className="main">
        <FrontEndTechnologies />
        <div
            className="subscribe"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                height: "300px",
                background: "#ADD8E6",
                fontFamily: "Montserrat", 
                margin: "0 auto",
            }}
        >
        <div
            className="text"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 20,
            }}
        >
            <h1 style={{ fontWeight: 235, letterSpacing: -2 }}>{title}</h1>
            <p>{tagline}</p>
        </div>
        <div
            className="input_tags"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
            }}
        >
            <input
                type="text"
                placeholder={placeholder_one}
                style={{
                    padding: 10,
                    margin: 10,
                    border: "1px lightgrey solid",
                    borderRadius: 10,
                }}
            />
            <input
                type="text"
                placeholder={placeholder_two}
                style={{
                    padding: 10,
                    margin: 10,
                    border: "1px lightgrey solid",
                    borderRadius: 10,
                }}
            />
            <input
                type="email"
                placeholder={placeholder_three}
                    style={{
                    padding: 10,
                    margin: 10,
                    border: "1px lightgrey solid",
                    borderRadius: 10,
                }}
            />
            </div>
            <div className="btn" style={{ padding: 10 }}>
                <button
                    style={{
                    height: 40,
                    width: 200,
                    border: "1px lightgrey solid",
                    borderRadius: 10,
                    background: "#f5837d",
                    color: "white",
                    }}
                >
                    {subscribe_button}
                </button>
            </div>
        </div>      
    </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
