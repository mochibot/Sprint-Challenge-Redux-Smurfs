import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf, deleteSmurf, editSmurf, addSmurf } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class SmurfList extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSmurf: null
    }
  }

  componentDidMount() {
    this.props.fetchSmurf();
  }

  addSmurf = (smurf) => {
    this.props.addSmurf(smurf)
  }

  deleteSmurf = (event, id) => {
    event.preventDefault();
    this.props.deleteSmurf(id)
  }

  setUpdateForm = (event, smurf) => {
    event.preventDefault();
    this.setState({
      activeSmurf: smurf
    })
  }

  editSmurf = (smurf) => {
    this.props.editSmurf(smurf);
    this.setState({
      activeSmurf: null
    })
  }

  render() {
    return (
      <div>
        <SmurfForm addSmurf={this.addSmurf} editSmurf={this.editSmurf} activeSmurf={this.state.activeSmurf}/>
        {this.props.isFetching && <div>Fetching smurfs</div>}
        {this.props.isAdding && <div>Adding smurf</div>}
        {this.props.isUpdating && <div>Updating smurf</div>}
        {this.props.isDeleting && <div>Deleting smurf</div>}
        {this.props.error && <div>{this.props.error}</div>}
        {this.props.smurfs.map(item => <Smurf smurf={item} key={item.id} deleteSmurf={this.deleteSmurf} setUpdateForm={this.setUpdateForm}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  isFetching: state.isFetching,
  isAdding: state.isAdding,
  isUpdating: state.isUpdating,
  isDeleting: state.Deleting,
  error: state.error,
})

export default connect(mapStateToProps, { fetchSmurf, addSmurf, deleteSmurf, editSmurf })(SmurfList);