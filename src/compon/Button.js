import React from 'react'
import { FaFeatherAlt } from "react-icons/fa";
const Button = (props) => {
    return (
    <button onClick={props.onClick} className={props.className} type={props.typ}><FaFeatherAlt/></button>
 )
}
export default Button
