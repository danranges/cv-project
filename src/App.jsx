import React from "react";
import "./index.css";
import PersonalInput from "./components/PersonalInput";
import Output from "./components/Output";
import EduInputsSection from "./components/EduInputsSection";
import WorkInputsSection from "./components/WorkInputsSection";
import SkillsInput from "./components/SkillsInput";
import InputContainer from "./components/InputContainer";

class App extends React.Component {
  state = {
    personal: {
      name: "",
      email: "",
      phone: "",
    },
    education: [],
    work: [],
    skills: "",
  };

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

  handleWorkChange = (jobBlock) => {
    if (!this.state.work.find(({ id }) => id === jobBlock.id)) {
      this.setState({ work: this.state.work.concat(jobBlock) });
    } else {
      this.setState({
        work: this.state.work.map((edu) => {
          return edu.id === jobBlock.id ? jobBlock : edu;
        }),
      });
    }
  };

  handleDelete = (obj, section) => {
    this.setState({
      [section]: this.state[section].filter(({ id }) => id !== obj.id),
    });
  };

  handleSkillsChange = (e) => {
    this.setState({
      skills: e.target.value,
    });
  };

  render() {
    return (
      <div className='App p-3'>
        <InputContainer title='Personal Info'>
          <PersonalInput handleChange={this.handlePersonalChange} data={this.state.personal} />
        </InputContainer>
        <InputContainer title='Educational Info'>
          <EduInputsSection
            handleChange={this.handleEduChange}
            handleDelete={this.handleDelete}
            education={this.state.education}
          />
        </InputContainer>
        <InputContainer title='Work Experience'>
          <WorkInputsSection
            handleChange={this.handleWorkChange}
            handleDelete={this.handleDelete}
            work={this.state.work}
          />
        </InputContainer>
        <InputContainer title='Skills'>
          <SkillsInput handleChange={this.handleSkillsChange} skills={this.state.skills} />
        </InputContainer>
        <Output cvData={this.state} />
      </div>
    );
  }
}

export default App;
