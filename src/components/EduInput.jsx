import React from "react";
import { generate } from "shortid";
import "../index.css";

class EduInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: generate(),
      school: "",
    };
  }

  componentDidMount() {
    this.props.pushChange(this.state);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });

    this.props.pushChange(this.state);
  };

  render() {
    const { school } = this.state;
    return (
      <div className='flex flex-col w-80 m-1 border-2'>
        <input
          name='school'
          type='text'
          placeholder='School'
          value={school}
          onChange={this.handleChange}
          className='border-2'></input>
      </div>
    );
  }
}

export default EduInput;
