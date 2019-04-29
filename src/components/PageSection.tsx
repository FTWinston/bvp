import React from 'react'
import Img, { FluidObject } from 'gatsby-image';
import './PageSection.scss';

interface IProps {
  className: string;
  innerClassName: string;

  id?: string;
  image?: FluidObject;
  children?: React.ReactNode;
  isFirst: boolean;
}

const PageSection = (props: IProps) => {
  const image = props.image === undefined
    ? undefined
    : <Img fluid={props.image} className="image" critical={props.isFirst} />

  return (
  <section className={props.className} id={props.id}>
    <div className={props.innerClassName}>
      {props.children}
    </div>
    {image}
  </section>
  )
}

export default PageSection
