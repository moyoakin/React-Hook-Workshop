<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./solutions/useEffectHTTPrequests/01_extra-6";
import reportWebVitals from "./reportWebVitals";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './exercise/useReducer/01'
import reportWebVitals from './reportWebVitals';
>>>>>>> 89a61f70f0e7ea697395fac5b3675148ef4d31e7

import "prismjs/themes/prism.css"; /* or your own custom theme */
import "prismjs/plugins/line-numbers/prism-line-numbers.css"; /* add plugin css */
// Require all needed languages
import "prismjs/components/prism-jsx";
// Require all needed plugins
import "prismjs/plugins/line-numbers/prism-line-numbers";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
