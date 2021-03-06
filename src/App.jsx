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
      city: "",
      title: "",
    },
    education: [],
    work: [],
    skills: "",
  };

  handleChange = (e, section, obj) => {
    if (section === "personal") {
      this.setState({
        personal: {
          ...this.state.personal,
          [e.target.name]: e.target.value,
        },
      });
      return;
    }

    if (section === "skills") {
      this.setState({
        skills: e.target.value,
      });
      return;
    }

    if (!this.state[section].find(({ id }) => id === obj.id)) {
      this.setState({ [section]: this.state[section].concat(obj) });
    } else {
      this.setState({
        [section]: this.state[section].map((prev) => {
          return prev.id === obj.id ? obj : prev;
        }),
      });
    }
  };

  handleDelete = (obj, section) => {
    this.setState({
      [section]: this.state[section].filter(({ id }) => id !== obj.id),
    });
    this.handleLocalStorage();
  };

  handleSave = () => {
    localStorage.setItem("cvData", JSON.stringify(this.state));
    console.log(localStorage.getItem("cvData"));
  };

  componentDidMount = () => {
    this.setState(JSON.parse(localStorage.getItem("cvData")));
  };

  render() {
    return (
      <div className='App flex flex-col items-center bg-indigo-50 dark:bg-indigo-800 h-screen'>
        <button
          className='mt-2 py-1 px-10 bg-emerald-200 text-gray-900 border-2 border-white rounded-md hover:bg-emerald-400 active:bg-emerald-300'
          onClick={this.handleSave}>
          Save
        </button>
        <div className='flex overflow-scroll'>
          <div className='flex flex-col max-h-screen overflow-y-scroll min-w-fit'>
            <InputContainer title='Personal Info'>
              <PersonalInput handleChange={this.handleChange} data={this.state.personal} />
            </InputContainer>
            <InputContainer title='Educational Info'>
              <EduInputsSection
                handleChange={this.handleChange}
                handleDelete={this.handleDelete}
                education={this.state.education}
              />
            </InputContainer>
            <InputContainer title='Work Experience'>
              <WorkInputsSection
                handleChange={this.handleChange}
                handleDelete={this.handleDelete}
                work={this.state.work}
              />
            </InputContainer>
            <InputContainer title='Skills'>
              <SkillsInput handleChange={this.handleChange} skills={this.state.skills} />
            </InputContainer>
          </div>
          <Output cvData={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
