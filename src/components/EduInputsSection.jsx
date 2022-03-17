import React from "react";
import EduInput from "./EduInput";
import { generate } from "shortid";
import "../index.css";

class EduInputsSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.education.length === 0
      ? this.props.handleChange({
          id: generate(),
          school: "",
        })
      : null;
  }

  addSchool = () => {
    this.props.handleChange({
      id: generate(),
      school: "",
    });
  };

  render() {
    return (
      <div>
        <p>{JSON.stringify(this.props.education)}</p>
        {this.props.education.map(({ id, school }) => {
          <EduInput pushChange={this.props.handleChange} key={id} school={school} />;
        })}
        <button onClick={this.addSchool} className='border-2 p-1 active:bg-zinc-400'>
          Add School
        </button>
      </div>
    );
  }
}

export default EduInputsSection;
