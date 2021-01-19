import React from "react";

const HTMLDisplay = ({ html }) => {
  function formatHTML(string) {
    const lineBreakString = string
      .replace(/v><d/g, "v>\n<d")
      .replace(/<div/g, `    <div`);
    return lineBreakString;
  }

  return (
    <div className="html-container">
      <h3>HTML</h3>
      <pre className="html-display">
        {'<div class="flex-container">\n' + formatHTML(html) + "\n</div>"}
      </pre>
    </div>
  );
};

export default HTMLDisplay;
