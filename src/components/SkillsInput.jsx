import React from "react";
import "../index.css";

class SkillsInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, skills } = this.props;

    return (
      <div className='flex flex-col w-80 m-1'>
        <textarea
          name='skills'
          type='textarea'
          placeholder='Skills'
          value={skills}
          className='form-control border-2'
          rows='3'
          onChange={handleChange}></textarea>
      </div>
    );
  }
}

export default SkillsInput;
