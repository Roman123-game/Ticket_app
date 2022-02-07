import React from 'react'
const Input = props => {
    return (
        <input maxLength="25"
        value={props.value}
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}/>
    )
}
export default Input
