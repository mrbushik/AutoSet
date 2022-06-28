import classNames from 'classnames'
import React from 'react'
import './button.scss'

function Button({buttonType, buttonText, standartOrangeBtn}) {
  return (
    <button  className={classNames(standartOrangeBtn 
        ?'button-orange'
        :'button-orange__perconatity'
        )}type={buttonType}>{buttonText}</button>
  )
}

export default Button