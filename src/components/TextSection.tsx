import React from 'react'

interface IProps {
  id?: string;
  children: any;
}

const TextSection = (props: IProps) => {
  const classes = 'wrapper style1 align-center';

  return (
  <section className={classes} id={props.id}>
    <div className="inner">
      {props.children}
    </div>
  </section>
  )
}

export default TextSection
