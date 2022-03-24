import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

class EduInput extends React.Component {
  state = {
    id: this.props.id,
    school: this.props.school,
    program: this.props.program,
    city: this.props.city,
    degree: this.props.degree,
    start: this.props.start,
    end: this.props.end,
  };

  handleChange = (e) => {
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value,
      },
      () => this.props.pushChange(e, "education", this.state),
    );
  };

  render() {
    const { handleDelete } = this.props;

    return (
      <div className='flex flex-col my-1 p-2 bg-indigo-50 dark:bg-indigo-400 rounded-md shadow-sm self-center items-center'>
        <div className='flex flex-col mx-0.5'>
          <input
            name='school'
            type='text'
            placeholder='School'
            value={this.state.school}
            onChange={this.handleChange}
            className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
          <input
            name='degree'
            type='text'
            placeholder='Degree'
            value={this.state.degree}
            onChange={this.handleChange}
            className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
          <input
            name='program'
            type='text'
            placeholder='Program'
            value={this.state.program}
            onChange={this.handleChange}
            className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
          <input
            name='city'
            type='text'
            placeholder='City'
            value={this.state.city}
            onChange={this.handleChange}
            className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
          <div className='flex mb-2'>
            <input
              name='start'
              type='date'
              placeholder='From'
              value={this.state.start}
              onChange={this.handleChange}
              className='border-2 border-indigo-200 p-1 w-40 rounded-md placeholder:text-gray-400'></input>
            <input
              name='end'
              type='date'
              placeholder='To'
              value={this.state.end}
              onChange={this.handleChange}
              className='border-2 border-indigo-200 p-1 w-40 rounded-md'></input>
          </div>
        </div>
        <button onClick={() => handleDelete(this.state, "education")}>
          <FontAwesomeIcon icon={faTrashCan} className='text-indigo-900' />
        </button>
      </div>
    );
  }
}

export default EduInput;
