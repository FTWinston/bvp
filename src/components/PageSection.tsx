import React from 'react'
import Img, { FluidObject } from 'gatsby-image';
import './PageSection.scss';
import LatestRecording from './LatestRecording';

interface IProps {
  className: string;
  innerClassName: string;

  id?: string;
  image?: FluidObject;
  functionality?: 'latest recording';
  children?: React.ReactNode;
  isFirst: boolean;
}

const PageSection = (props: IProps) => {
  const image = props.image === undefined
    ? undefined
    : <Img fluid={props.image} className="image" critical={props.isFirst} />

  const functionality = props.functionality === 'latest recording'
    ? <LatestRecording />
    : undefined;

  return (
  <section className={props.className} id={props.id}>
    <div className={props.innerClassName}>
      {props.children}
      {functionality}
    </div>
    {image}
  </section>
  )
}

export default PageSection
