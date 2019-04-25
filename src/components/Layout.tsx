/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import '../sass/main.scss'
import Footer from './Footer';

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
      
      <Footer />
    </div>
  }
}

export default Layout
