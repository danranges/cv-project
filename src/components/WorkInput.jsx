import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
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
      () => this.props.pushChange(e, "work", this.state),
    );
  };

  render() {
    const { handleDelete } = this.props;

    return (
      <div className='flex flex-col my-1 p-2 bg-indigo-50 rounded-md shadow-sm self-center items-center'>
        <div className='flex mx-0.5'>
          <input
            name='company'
            type='text'
            placeholder='Company'
            value={this.state.company}
            onChange={this.handleChange}
            className='border-2 border-indigo-200 p-1 w-80 rounded-md'></input>
        </div>
        <button onClick={() => handleDelete(this.state, "work")}>
          <FontAwesomeIcon icon={faTrashCan} className='text-indigo-900' />
        </button>
      </div>
    );
  }
}

export default WorkInput;
