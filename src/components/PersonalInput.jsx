import React from "react";
import "../index.css";

class PersonalInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange } = this.props;
    const { name, email, phone } = this.props.data;
    return (
      <div className='flex flex-col mx-1 my-2 p-2 bg-indigo-50 rounded-md shadow-sm self-center'>
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={name}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'
          onChange={(e) => handleChange(e, "personal")}></input>
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={email}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'
          onChange={(e) => handleChange(e, "personal")}></input>
        <input
          name='phone'
          type='tel'
          placeholder='Phone'
          value={phone}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md'
          onChange={(e) => handleChange(e, "personal")}></input>
      </div>
    );
  }
}

export default PersonalInput;
