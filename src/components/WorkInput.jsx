import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

class WorkInput extends React.Component {
  state = {
    id: this.props.id,
    company: this.props.company,
    position: this.props.position,
    city: this.props.city,
    start: this.props.start,
    end: this.props.end,
    desc: this.props.desc,
  };

  handleChange = (e) => {
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value,
      },
      () => this.props.pushChange(e, "work", this.state),
    );
  };

  render() {
    const { handleDelete } = this.props;

    return (
      <div className='flex flex-col my-1 mx-0 p-2 bg-indigo-50 rounded-md shadow-sm self-center items-center'>
        <input
          name='company'
          type='text'
          placeholder='Company'
          value={this.state.company}
          onChange={this.handleChange}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
        <input
          name='position'
          type='text'
          placeholder='Position'
          value={this.state.position}
          onChange={this.handleChange}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
        <input
          name='city'
          type='text'
          placeholder='City'
          value={this.state.city}
          onChange={this.handleChange}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
        <div className='flex mb-1'>
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
        <textarea
          name='desc'
          type='text'
          placeholder='Description'
          value={this.state.desc}
          rows='4'
          onChange={this.handleChange}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-2'></textarea>
        <button onClick={() => handleDelete(this.state, "work")}>
          <FontAwesomeIcon icon={faTrashCan} className='text-indigo-900' />
        </button>
      </div>
    );
  }
}

export default WorkInput;
