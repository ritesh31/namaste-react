/*
<div id="parent">
  <div id="child1">
    <h1>This is H1 Tag</h1>
    <h2>This is H2 Tag</h2>
  </div>
  <div id="child2">
    <h1>This is H1 Tag</h1>
    <h2>This is H2 Tag</h2>
  </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is H1 Tag"),
    React.createElement("h2", {}, "This is H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is H1 Tag"),
    React.createElement("h2", {}, "This is H2 Tag"),
  ]),
]);

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
