import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/ritesh31");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  componentDidUpdate() {
    console.log(this.props.name + " Child Component Did Update");
  }

  componentWillUnmount() {
    console.log(this.props.name + " Child Component will unmount");
  }

  render() {
    console.log(this.props.name + " Child render");
    const { login, name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>User Details</h2>
        <img src={avatar_url} />
        <h4>Login ID: {login}</h4>
        <h4>Name: {name}</h4>
        <h4>Email: ritesh@gmail.com </h4>
        <h4>Contact: 232342345</h4>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}
