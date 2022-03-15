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
      <div className='flex flex-col max-w-sm m-1'>
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={name}
          className='border-2'
          onChange={handleChange}></input>
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={email}
          className='border-2'
          onChange={handleChange}></input>
        <input
          name='phone'
          type='tel'
          placeholder='Phone'
          value={phone}
          className='border-2'
          onChange={handleChange}></input>
      </div>
    );
  }
}

export default PersonalInput;
