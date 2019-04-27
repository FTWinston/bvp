import React from 'react'
import Img, { FluidObject } from 'gatsby-image';

interface IProps {
  orient: 'left' | 'right';
  id?: string;
  image: FluidObject;
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
    <Img fluid={props.image} className="image" />
  </section>
  )
}

export default Spotlight
