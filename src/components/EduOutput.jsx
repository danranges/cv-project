import React from "react";
import { format } from "date-fns";
import "../index.css";

class EduOutput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, program, degree, city, start, end } = this.props.school;

    return (
      <div className='my-2'>
        <div className='flex justify-between'>
          <div className='font-extrabold'>{school}</div>
          <p>
            {format(new Date(start), "yyyy")}
            {start && end ? " - " : null}
            {format(new Date(end), "yyyy")}
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='flex'>
            <div className='font-semibold'>{degree}</div>
            {degree && program ? <p className='mx-1'>-</p> : null}
            <div>{program}</div>
          </div>
          <div>{city}</div>
        </div>
      </div>
    );
  }
}

export default EduOutput;
