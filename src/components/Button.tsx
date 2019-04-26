import React from 'react'

const Button = ({ target, children }) => (
  <li>
      <a href={target} className="button big wide">
        {children}
      </a>
  </li>
)

export default Button
