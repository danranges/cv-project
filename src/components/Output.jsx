import React from "react";
import "../index.css";
import EduOutput from "./EduOutput";
import PersonalOutput from "./PersonalOutput";
import WorkOutput from "./WorkOutput";

class Output extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, education, work, skills } = this.props.cvData;
    return (
      <div className='flex flex-col justify-between bg-white rounded-lg shadow-md m-2 p-2 w-[50rem] break-normal'>
        <PersonalOutput personal={personal} />
        <div>Education:</div>
        {education.map((school) => {
          return <EduOutput school={school}></EduOutput>;
        })}
        <div>Experience:</div>
        {work.map((job) => {
          return <WorkOutput job={job} />;
        })}
        <div className='mb-2'>
          <div>Skills:</div>
          <div>{JSON.stringify(skills)}</div>
        </div>
      </div>
    );
  }
}

export default Output;
