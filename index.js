import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Title Component</h1>;
};

// Component Composition
const HeadingComponent = () => {
  return (
    <h1 id="heading" className="test" tabIndex="1">
      <Title />
      Heading Component
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
