import React from "react";
import WorkInput from "./WorkInput";
import { generate } from "shortid";
import "../index.css";

class WorkInputsSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.work.length === 0 ? this.addJob() : null;
  }

  addJob = () => {
    this.props.handleChange(
      null,
      "work",

      {
        id: generate(),
        company: "",
      },
    );
  };

  render() {
    const { work, handleChange, handleDelete } = this.props;
    return (
      <div className='flex flex-col w-full self-center p-2'>
        {work.map(({ id, company }) => {
          return (
            <WorkInput
              key={id}
              pushChange={handleChange}
              handleDelete={handleDelete}
              company={company}
              id={id}
            />
          );
        })}
        <button
          onClick={this.addJob}
          className='bg-indigo-700 text-white m-2 py-2 px-12 w-fit rounded-md self-center'>
          Add Job
        </button>
      </div>
    );
  }
}

export default WorkInputsSection;
