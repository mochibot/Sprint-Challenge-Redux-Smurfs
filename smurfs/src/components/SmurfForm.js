import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

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
    this.props.addSmurf(this.state.input);
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

const mapStateToProps = (state) => ({
  isAdding: state.isAdding,
  error: state.error,
})


export default connect(mapStateToProps, { addSmurf })(SmurfForm);