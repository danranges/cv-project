import React from "react";
import "../index.css";

class WorkOutput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, position, desc, city, start, end, id } = this.props.job;

    return (
      <div key={id}>
        <div>{company}</div>
        <div>{position}</div>
        <div>{city}</div>
        <div>{start}</div>
        <div>{end}</div>
        <div>{desc}</div>
      </div>
    );
  }
}

export default WorkOutput;
