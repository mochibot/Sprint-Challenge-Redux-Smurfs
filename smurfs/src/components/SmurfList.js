import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf, addSmurf } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.fetchSmurf();
  }

  addSmurf = (event, smurf) => {
    event.preventDefault();
    this.props.addSmurf(smurf);
  }
  
  render() {
    return (
      <div>
        <SmurfForm addSmurf={this.addSmurf} isAdding={this.props.isAdding}/>
        {this.props.isFetching && <div>Fetching smurfs</div>}
        {this.props.error && <div>{this.props.error}</div>}
        {this.props.smurfs.map(item => <Smurf smurf={item} key={item.id}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  isFetching: state.isFetching,
  isAdding: state.isAdding,
  error: state.error,
})

export default connect(mapStateToProps, { fetchSmurf, addSmurf })(SmurfList);