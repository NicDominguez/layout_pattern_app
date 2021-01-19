import React, { useEffect } from "react";
import "./styles.css";

import flexStyles from "./flexStyles.js";

import FlexElementsContainer from "./components/FlexElementsContainer";
import CSSDisplay from "./components/CSSDisplay";
import HTMLDisplay from "./components/HTMLDisplay";

export default function App() {
  const [pattern, setPattern] = React.useState(null);
  const [html, setHTML] = React.useState("no html");

  const getHTML = () => {
    const retrievedHTML = document.getElementById("flex-container").innerHTML;
    setHTML(retrievedHTML);
  };

  useEffect(() => {
    if (pattern) getHTML();
  }, [pattern]);

  return (
    <div className="App">
      <h1>Flexbox Design Patterns</h1>
      <div className="button-container">
        {Object.keys(flexStyles).map((key) => {
          return (
            <button onClick={() => setPattern(flexStyles[key])}>
              {flexStyles[key].title}
            </button>
          );
        })}
      </div>
      {pattern ? (
        <>
          <h3 className="pattern-title">{pattern.title}</h3>
          <div className="pattern-container">
            <HTMLDisplay html={html} />
            <FlexElementsContainer pattern={pattern} />
            <CSSDisplay pattern={pattern} />
          </div>
        </>
      ) : (
        <p>Please choose a design pattern</p>
      )}
    </div>
  );
}
