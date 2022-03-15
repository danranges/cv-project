import React from "react";
import EduInput from "./EduInput";
import "../index.css";

class EduInputsSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <EduInput pushChange={this.props.handleChange} />
      </div>
    );
  }
}

export default EduInputsSection;
