import React from "react";
import "../index.css";

class EduOutput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, program, degree, city, start, end, id } = this.props.school;

    return (
      <div key={id}>
        <div>{school}</div>
        <div>{program}</div>
        <div>{degree}</div>
        <div>{city}</div>
        <div>{start}</div>
        <div>{end}</div>
      </div>
    );
  }
}

export default EduOutput;
