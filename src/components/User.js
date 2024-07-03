import React, { useState } from "react";

function User({ name, location }) {
  const [count] = useState(0);

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>User Details</h2>
      <h4>Name: {name}</h4>
      <h4>Email: ritesh@gmail.com </h4>
      <h4>Contact: 232342345</h4>
      <h4>Location: {location}</h4>
    </div>
  );
}

export default User;
