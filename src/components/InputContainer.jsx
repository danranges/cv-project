import React from "react";
import "../index.css";

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, children } = this.props;
    return (
      <div className='flex flex-col w-96 m-2 p-2 bg-white rounded-lg shadow-md items-center'>
        <h3>{title}</h3>
        {children}
      </div>
    );
  }
}

export default InputContainer;
