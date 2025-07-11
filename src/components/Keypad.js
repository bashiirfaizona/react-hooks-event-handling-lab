
import React from 'react';

class Keypad extends React.Component {
  handleChange = () => {
    console.log('Entering password...');
  };

  render() {
    return (
      <div>
        <input 
          type="password" 
          onChange={this.handleChange} 
          placeholder="Enter password" 
        />
      </div>
    );
  }
}

export default Keypad;
