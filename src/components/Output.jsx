import React from "react";
import "../index.css";

class Output extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='m-2 p-2'>
        <div>Personal:</div>
        <div>{JSON.stringify(this.props.cvData.personal, null, 4)}</div>
        <div>Education:</div>
        <div>{JSON.stringify(this.props.cvData.education, null, 4)}</div>
        <div>Experience:</div>
        <div>{JSON.stringify(this.props.cvData.work, null, 4)}</div>
        <div>Skills:</div>
        <div>{JSON.stringify(this.props.cvData.skills, null, 4)}</div>
      </div>
    );
  }
}

export default Output;
