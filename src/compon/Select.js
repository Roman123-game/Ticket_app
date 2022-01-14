import React from 'react'


const Select = (props) => {
    return (
        <select className={props.className} onChange={props.onChange}>
        <option value="Shop">Shop</option>
        <option value="Tech">Tech</option>
        <option value="Rest">Rest</option>
      </select>
    )
}



export default Select