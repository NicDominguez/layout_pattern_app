import React from "react";

const CSSDisplay = ({ pattern }) => {
  const JSToCSS = (JS) => {
    let containerStylesString = "";
    let elementStylesString = "";

    Object.keys(JS).forEach((key, index) => {
      if (key.charAt(0) !== "&") {
        containerStylesString +=
          key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) +
          ": " +
          JS[key] +
          ";\n";
      } else {
        Object.keys(JS[key]).forEach((elementKey, index) => {
          elementStylesString +=
            [key] +
            "{\n    " +
            elementKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) +
            ": " +
            JS[key][elementKey] +
            "};\n";
        });
      }
    });
    return { containerStylesString, elementStylesString };
  };

  return (
    <div className="css-container">
      <h3>Container Styles</h3>
      <pre className="css-display">
        {JSToCSS(pattern.styles).containerStylesString}
      </pre>
      <h3>Element Styles</h3>
      <pre className="css-display">
        {JSToCSS(pattern.styles).elementStylesString}
      </pre>
    </div>
  );
};

export default CSSDisplay;
