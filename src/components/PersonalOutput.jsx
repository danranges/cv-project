import React from "react";
import "../index.css";

class PersonalOutput extends React.Component {
  render() {
    const { name, title, city, email, phone } = this.props.personal;

    return (
      <div className='flex justify-between my-2 pb-2 border-b-2'>
        <div className='flex flex-col justify-between'>
          <h1 className='font-bold text-5xl'>{name}</h1>
          <p>{title}</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p>{city}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    );
  }
}

export default PersonalOutput;
