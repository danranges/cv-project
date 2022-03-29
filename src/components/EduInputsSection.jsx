import React from "react";
import EduInput from "./EduInput";
import { generate } from "shortid";
import "../index.css";

class EduInputsSection extends React.Component {
  componentDidMount() {
    return this.props.education.length === 0 ? this.addSchool() : null;
  }

  addSchool = () => {
    this.props.handleChange(
      null,
      "education",

      {
        id: generate(),
        school: "",
        program: "",
        degree: "",
        city: "",
        start: Date(),
        end: Date(),
      },
    );
  };

  render() {
    const { education, handleChange, handleDelete } = this.props;
    return (
      <div className='flex flex-col w-full self-center p-2'>
        {education.map(({ id, school, program, degree, city, start, end }) => {
          return (
            <EduInput
              key={id}
              pushChange={handleChange}
              handleDelete={handleDelete}
              program={program}
              degree={degree}
              school={school}
              city={city}
              start={start}
              end={end}
              id={id}
            />
          );
        })}
        <button
          onClick={this.addSchool}
          className='bg-indigo-500 text-white m-2 py-2 px-12 w-fit rounded-md self-center'>
          Add School
        </button>
      </div>
    );
  }
}

export default EduInputsSection;
