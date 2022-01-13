
import React from 'react'


const Input = props => {
    return (
        <input
        value={props.value}
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    )
}


export default Input
