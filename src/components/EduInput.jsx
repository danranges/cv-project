import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
      <div className='flex flex-col w-80 m-1 p-2 bg-zinc-200 rounded-md'>
        <div className='flex justify-end mx-0.5'>
          <button onClick={() => handleDelete(this.state, "education")}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <input
          name='school'
          type='text'
          placeholder='School'
          value={this.state.school}
          onChange={this.handleChange}
          className='border-2'></input>
        <input
          name='program'
          type='text'
          placeholder='Program'
          value={this.state.program}
          onChange={this.handleChange}
          className='border-2'></input>
      </div>
    );
  }
}

export default EduInput;
