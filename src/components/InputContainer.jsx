import React from "react";
import "../index.css";

class InputContainer extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className='flex flex-col min-w-min m-2 p-2 bg-white dark:bg-indigo-700 rounded-lg shadow-md items-center justify-center'>
        <h3>{title}</h3>
        {children}
      </div>
    );
  }
}

export default InputContainer;
