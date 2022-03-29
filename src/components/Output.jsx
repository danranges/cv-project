import React from "react";
import "../index.css";
import EduOutput from "./EduOutput";
import PersonalOutput from "./PersonalOutput";
import WorkOutput from "./WorkOutput";

class Output extends React.Component {
  render() {
    const { personal, education, work, skills } = this.props.cvData;
    return (
      <div className='flex flex-col bg-white rounded-lg shadow-md m-2 p-2 w-[50rem] break-normal'>
        <PersonalOutput personal={personal} />
        <div className='mt-2 text-3xl font-extralight'>Education:</div>
        {education.map((school) => {
          return <EduOutput key={school.id} school={school}></EduOutput>;
        })}
        <div className=' mt-2 text-3xl font-extralight'>Experience:</div>
        {work.map((job) => {
          return <WorkOutput key={job.id} job={job} />;
        })}
        <div className='mb-2'>
          <div className='mt-2 text-3xl font-extralight'>Skills:</div>
          <div className='mt-2'>{skills}</div>
        </div>
      </div>
    );
  }
}

export default Output;
