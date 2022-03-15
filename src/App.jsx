import React from "react";
import "./index.css";
import PersonalInput from "./components/PersonalInput";
import Output from "./components/Output";
import EduInputsSection from "./components/EduInputsSection";

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
    if (this.state.education.length === 0) {
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
      <div className='App'>
        <PersonalInput handleChange={this.handlePersonalChange} data={this.state.personal} />
        <EduInputsSection
          handleChange={this.handleEduChange}
          schoolCount={this.state.education.length}
        />
        <Output cvData={this.state} />
      </div>
    );
  }
}

export default App;
