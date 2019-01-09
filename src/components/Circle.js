import React from 'react'

export default function Circle(props) {
  return (
    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <circle onClick={props.onClick} cx="50%" cy="50%" r={props.radius}/>
    </svg>
  )
}
