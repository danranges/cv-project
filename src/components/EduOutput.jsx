import React from "react";
import "../index.css";

class EduOutput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, program, degree, city, start, end } = this.props.school;

    return (
      <div>
        <div className='flex justify-between'>
          <div className='font-extrabold'>{school}</div>
          <p>
            {start} - {end}
          </p>
        </div>
        <div>{program}</div>
        <div>{degree}</div>
        <div>{city}</div>
      </div>
    );
  }
}

export default EduOutput;
