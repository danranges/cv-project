import React from "react";
import "../index.css";

class Output extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, phone } = this.props.personal;

    return (
      <>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </>
    );
  }
}

export default Output;
