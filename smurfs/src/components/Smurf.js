import React from 'react';

const Smurf = (props) => {
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={(event) => props.setUpdateForm(event, props.smurf)}>Edit</button>
      <button onClick={(event) => props.deleteSmurf(event, props.smurf.id)}>Delete</button>
    </div>
  )
}

export default Smurf;