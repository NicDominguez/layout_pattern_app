import FlexElement from "./FlexElement.js";

/** @jsx jsx */
import { jsx } from "@emotion/react";

const FlexElementsContainer = ({ pattern }) => {
  let elements = [];
  for (let i = 0; i < pattern.columns; i++) {
    elements.push(<FlexElement key={i} className="flex-element" />);
  }

  return (
    <div id="flex-container" className="flex-container" css={pattern.styles}>
      {elements}
    </div>
  );
};

export default FlexElementsContainer;
