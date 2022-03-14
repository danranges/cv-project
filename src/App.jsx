import React from "react";
import "./index.css";
import PersonalData from "./components/PersonalData";
import Output from "./components/Output";

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

  handleChange = (e) => {
    this.setState({
      personal: {
        ...this.state.personal,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className='App'>
        <PersonalData handleChange={this.handleChange} data={this.state.personal} />
        <Output cvData={this.state} />
      </div>
    );
  }
}

export default App;
