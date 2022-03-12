import React from "react";
import "./index.css";
import Output from "./components/Output";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: "Dan",
        email: "",
        phone: "",
      },
      education: [],
      work: [],
      skills: "",
    };
  }

  render() {
    return (
      <div className='App'>
        <h1 className=''>Hello</h1>
        <Output personal={this.state.personal} />
      </div>
    );
  }
}

export default App;
