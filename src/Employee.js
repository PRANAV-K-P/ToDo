import React from 'react'

function Employee(props) {
  return (
    <div>
        <h1 >Firstname: {props.first_name} , Lastname: {props.last_name}</h1>
    </div>
  )
}

export default Employee