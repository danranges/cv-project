import React from "react";
import EduInput from "./EduInput";
import { generate } from "shortid";
import "../index.css";

class EduInputsSection extends React.Component {
  constructor(props) {
    super(props);
  }

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
      },
    );
  };

  render() {
    const { education, handleChange, handleDelete } = this.props;
    return (
      <div>
        {education.map(({ id, school, program }) => {
          return (
            <EduInput
              key={id}
              pushChange={handleChange}
              handleDelete={handleDelete}
              program={program}
              school={school}
              id={id}
            />
          );
        })}
        <button onClick={this.addSchool} className='border-2 p-1 active:bg-zinc-400'>
          Add School
        </button>
      </div>
    );
  }
}

export default EduInputsSection;
