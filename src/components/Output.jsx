import React from "react";
import "../index.css";

class Output extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, education, work, skills } = this.props.cvData;
    return (
      <div className='flex flex-col justify-between bg-white rounded-lg shadow-md m-2 p-2 w-fit max-w-3xl break-normal'>
        <div className='flex justify-between mt-2'>
          <div>
            <h1 className='font-bold text-5xl'>{personal.name}</h1>
            <p>{personal.title}</p>
          </div>
          <div>
            <p>{personal.city}</p>
            <p>{personal.email}</p>
            <p>{personal.phone}</p>
          </div>
        </div>
        <div>
          <div>Education:</div>
          {education.map((school) => {
            return <div>{JSON.stringify(school, null, 2)}</div>;
          })}
        </div>
        <div>
          <div>Experience:</div>
          {work.map((job) => {
            return <div>{JSON.stringify(job, null, 2)}</div>;
          })}
        </div>
        <div className='mb-2'>
          <div>Skills:</div>
          <div>{JSON.stringify(skills)}</div>
        </div>
      </div>
    );
  }
}

export default Output;
