import React from 'react'

interface IProps {
  orient: 'left' | 'right';
  id?: string;
  image: string;
  children: any;
}

const Spotlight = (props: IProps) => {
  const classes = props.orient === 'right'
    ? 'spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in'
    : 'spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in';

  return (
  <section className={classes} id={props.id}>
    <div className="content">
      {props.children}
    </div>
    <div className="image">
      <img src={props.image} alt="" />
    </div>
  </section>
  )
}

export default Spotlight
