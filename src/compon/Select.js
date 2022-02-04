import React from 'react'



const Select = (props) => {
    return (
        <select className={props.className} onChange={props.onChange}>
        <option >Shop</option>
        <option >Tech</option>
        <option >Rest</option>
      </select>
    )
}



export default Select;
