import React from "react";
import "./index.css";
import PersonalInput from "./components/PersonalInput";
import Output from "./components/Output";
import EduInputsSection from "./components/EduInputsSection";
import InputContainer from "./components/InputContainer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: "",
        email: "",
        phone: "",
      },
      education: [],
      work: [],
      skills: "",
    };
  }

  handlePersonalChange = (e) => {
    this.setState({
      personal: {
        ...this.state.personal,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleEduChange = (eduBlock) => {
    if (!this.state.education.find(({ id }) => id === eduBlock.id)) {
      this.setState({ education: this.state.education.concat(eduBlock) });
    } else {
      this.setState({
        education: this.state.education.map((edu) => {
          return edu.id === eduBlock.id ? eduBlock : edu;
        }),
      });
    }
  };

  render() {
    return (
      <div className='App p-3'>
        <InputContainer title='Personal Info'>
          <PersonalInput handleChange={this.handlePersonalChange} data={this.state.personal} />
        </InputContainer>
        <InputContainer title='Educational Info'>
          <EduInputsSection handleChange={this.handleEduChange} education={this.state.education} />
        </InputContainer>
        <InputContainer title='Work Experience'></InputContainer>
        <InputContainer title='Skills'></InputContainer>
        <Output cvData={this.state} />
      </div>
    );
  }
}

export default App;
