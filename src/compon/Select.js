import React from 'react'
import PropTypes from 'prop-types'

const Select = (props) => {
    return (
        <select className={props.className} onChange={props.onChange}>
        <option value={props.value}>Shop</option>
        <option value={props.value}>Tech</option>
        <option value={props.value}>Rest</option>
      </select>
    )
}



export default Select
