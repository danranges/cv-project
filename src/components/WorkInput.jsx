import React from "react";
import "../index.css";

class WorkInput extends React.Component {
  state = {
    id: this.props.id,
    company: this.props.company,
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
    const { handleDelete } = this.props;

    return (
      <div className='flex flex-col w-80 m-1 p-2 bg-zinc-200 rounded-md'>
        <div className='flex justify-end mx-0.5'>
          <button onClick={() => handleDelete(this.state)}>X</button>
        </div>
        <input
          name='company'
          type='text'
          placeholder='Company'
          value={this.state.company}
          onChange={this.handleChange}
          className='border-2'></input>
      </div>
    );
  }
}

export default WorkInput;
