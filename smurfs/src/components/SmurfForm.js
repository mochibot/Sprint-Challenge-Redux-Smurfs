import React from 'react';

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {
        name: '',
        age: '',
        height: '',
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeSmurf && prevProps.activeSmurf !== this.props.activeSmurf) {
      this.setState({
        input: this.props.activeSmurf
      })
    }
  }

  inputHandler = (event) => {
    event.persist();
    let value = event.target.value;
    if (event.target.name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: value
      }
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    if (this.props.activeSmurf) {
      this.props.editSmurf(this.state.input); 
    } else {
      this.props.addSmurf(this.state.input);
    }
    this.setState({
      input: {
        name: '',
        age: '',
        height: '',
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='name' value={this.state.input.name} onChange={this.inputHandler} required/>
          <input type='number' name='age' value={this.state.input.age} onChange={this.inputHandler} required/>
          <input type='text' name='height' value={this.state.input.height} onChange={this.inputHandler} required/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SmurfForm;