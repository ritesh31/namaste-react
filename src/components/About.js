// import React from "react";
// import User from "./User";
// import UserClass from "./UserClass";
// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//       {/* <User name="Ritesh" location="Pune" /> */}
//       <UserClass name="Ritesh" location="Pune" />
//     </div>
//   );
// }

// export default About;
import React, { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/usercontext";

export default class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h2>About</h2>
        <UserClass name="Ritesh" location="Pune" />
        <UserContext.Consumer>
          {(user) => {
            return <h2>User: {user.name}</h2>;
          }}
        </UserContext.Consumer>
        {/* <UserClass name="Elon Musk" location="Pune" /> */}
      </div>
    );
  }
}

/*  Work flow for React class component

- Parent Constructor
- Parent Render
  - Child 1 Constructor
  - Child 1 Render
  
  - Child 2 Constructor
  - Child 2 Render

  <DOM UPDATED _N SINGLE BATCH>
  - Child 1 Component Did Mount
  - Child 2 Component Did Mount

- Parent Component Did Mount
- Child Component Did Mount
*/
