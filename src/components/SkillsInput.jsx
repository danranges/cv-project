import React from "react";
import "../index.css";

class SkillsInput extends React.Component {
  render() {
    const { handleChange, skills } = this.props;

    return (
      <div className='flex flex-col mx-1 my-2 p-2 bg-indigo-50 rounded-md shadow-sm self-center'>
        <textarea
          name='skills'
          type='textarea'
          placeholder='Skills'
          value={skills}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md'
          rows='4'
          onChange={(e) => handleChange(e, "skills")}></textarea>
      </div>
    );
  }
}

export default SkillsInput;
