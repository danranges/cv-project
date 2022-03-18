import React from "react";
import WorkInput from "./WorkInput";
import { generate } from "shortid";
import "../index.css";

class WorkInputsSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.work.length === 0
      ? this.props.handleChange(null, "work", {
          id: generate(),
          company: "",
        })
      : null;
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
      <div>
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
        <button onClick={this.addJob} className='border-2 p-1 active:bg-zinc-400'>
          Add Job
        </button>
      </div>
    );
  }
}

export default WorkInputsSection;
