import React from "react";
import { generate } from "shortid";
import "../index.css";

class EduInput extends React.Component {
  state = {
    id: this.props.id,
    school: this.props.school,
  };

  handleChange = (e) => {
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value,
      },
      () => this.props.pushChange(this.state),
    );
  };

  render() {
    return (
      <div className='flex flex-col w-80 m-1 p-2 bg-zinc-200 rounded-md'>
        <div className='flex justify-end mx-0.5'>
          <button>X</button>
        </div>
        <input
          name='school'
          type='text'
          placeholder='School'
          value={this.state.school}
          onChange={this.handleChange}
          className='border-2'></input>
      </div>
    );
  }
}

export default EduInput;
