import React from 'react'
import HeraldButton from './HeraldButton';

interface IProps {
  target: string;
  children: string;
  functionality: undefined | 'latest magazine';
}

const Button = (props: IProps) => {
  if (props.functionality === 'latest magazine') {
    return <HeraldButton text={props.children} />
  }

  return (
    <li>
        <a href={props.target} className="button big wide">
          {props.children}
        </a>
    </li>
  );
}

export default Button
