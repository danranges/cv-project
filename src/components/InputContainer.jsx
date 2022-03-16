import React from "react";
import "../index.css";

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, children } = this.props;
    return (
      <div className='max-w-fit m-2 p-2 bg-zinc-100 rounded-lg'>
        <h3>{title}</h3>
        {children}
      </div>
    );
  }
}

export default InputContainer;
