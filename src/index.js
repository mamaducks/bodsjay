import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// import { render } from "react-dom";
// // import { ThemeProvider,  } from "@material-ui/styles";
// // import theme from "./theme.jsx"
// // import { RecoilRoot } from "recoil";
// import { App } from "./App/App";

// render(
//   // <RecoilRoot>
//   //    <ThemeProvider theme={theme} >

//       <App />,
//   //  </ThemeProvider>
//   // </RecoilRoot>,
//   document.getElementById("root")
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
