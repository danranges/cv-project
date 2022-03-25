import React from "react";
import "../index.css";

class PersonalOutput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, title, city, email, phone } = this.props.personal;

    return (
      <div className='flex justify-between mt-2 w-'>
        <div>
          <h1 className='font-bold text-5xl'>{name}</h1>
          <p>{title}</p>
        </div>
        <div>
          <p>{city}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    );
  }
}

export default PersonalOutput;
