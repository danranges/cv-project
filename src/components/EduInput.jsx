import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

class EduInput extends React.Component {
  state = {
    id: this.props.id,
    school: this.props.school,
    program: this.props.program,
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
      <div className='flex flex-col my-1 p-2 bg-indigo-50 rounded-md shadow-sm self-center items-center'>
        <div className='flex flex-col mx-0.5'>
          <input
            name='school'
            type='text'
            placeholder='School'
            value={this.state.school}
            onChange={this.handleChange}
            className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
          <input
            name='program'
            type='text'
            placeholder='Program'
            value={this.state.program}
            onChange={this.handleChange}
            className='border-2 border-indigo-200 p-1 w-80 rounded-md'></input>
        </div>
        <button onClick={() => handleDelete(this.state, "education")}>
          <FontAwesomeIcon icon={faTrashCan} className='text-indigo-900' />
        </button>
      </div>
    );
  }
}

export default EduInput;
