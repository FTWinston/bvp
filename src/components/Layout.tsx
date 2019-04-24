/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import SmoothScroll from 'smooth-scroll'
import '../sass/main.scss'

interface IState {
  loaded: boolean;
}

class Layout extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      loaded: false,
    }
  }

  private timerID: NodeJS.Timer;

  componentDidMount() {
    this.timerID = setTimeout(
      () => this.setState({ loaded: true }),
      100
    );

    new SmoothScroll('a[href*="#"]', { speed: 1500 });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const helmet = this.state.loaded
      ? undefined
      : <Helmet><body className="is-preload" /></Helmet>

    return <div id="wrapper" className="divided">
      {helmet}
      {this.props.children}
    </div>
  }
}

export default Layout
