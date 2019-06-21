import React from 'react';

const Smurf = (props) => {
  return (
    <div className='smurf-card'>
      <h2>{props.smurf.name}</h2>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <div className='smurf-card-btn'>
        <button onClick={(event) => props.setUpdateForm(event, props.smurf)}>Edit</button>
        <button onClick={(event) => props.deleteSmurf(event, props.smurf.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Smurf;