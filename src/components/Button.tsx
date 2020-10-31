import React from 'react'
import HeraldButton from './HeraldButton';
import RecordingButton from './RecordingButton';

interface IProps {
  target: string;
  children: string;
  functionality?: 'latest magazine';
}

const Button = (props: IProps) => {
  if (props.functionality === 'latest magazine') {
    return <HeraldButton text={props.children} />
  }
  if (props.functionality === 'latest recording') {
    return <RecordingButton text={props.children} />
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
