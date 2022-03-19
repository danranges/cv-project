import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
      <div className='flex flex-col w-80 m-1 p-2 bg-zinc-200 rounded-md'>
        <div className='flex justify-end mx-0.5'>
          <button onClick={() => handleDelete(this.state, "work")}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
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
