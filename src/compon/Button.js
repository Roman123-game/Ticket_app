import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    return (
        
             <button onClick={props.onClick} className={props.className} type={props.typ}>&#x1F4AC; </button>
        
    )
}




export default Button
