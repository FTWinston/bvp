import React from 'react'

interface IProps {
  target: string;
  children: string;
}

const Button = (props: IProps) => {
  return (
    <li>
        <a href={props.target} className="button big wide">
          {props.children}
        </a>
    </li>
  );
}

export default Button
