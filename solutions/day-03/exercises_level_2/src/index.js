import React from "react";
import ReactDOM from "react-dom"; 

const title = "SUBSCRIBE";
const tagline = "Sign up with your email address to receive news and updates";
const placeholder_one = "First Name";
const placeholder_two = "Last Name";
const placeholder_three = "Email";
const subscribe_button = "Subscribe";

const app = (
    <div
        className="container"
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            height: "300px",
            background: "#ADD8E6",
            fontFamily: "Montserrat",
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
);



// const app = (
//     <div className="app">
//         <div>
//             <h1>{title}</h1>
//             <p>{tagline}</p>
//         </div>
//         <div>
//             <input placeholder={placeholder_one}/>
//             <input placeholder={placeholder_two} /> 
//             <input placeholder={placeholder_three} />
//         </div>
//         <div>
//             <button>
//                 {subscribe_button}
//             </button>
//         </div>
//     </div>
// );

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
