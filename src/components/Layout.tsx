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

interface IProps {
  isHomePage?: boolean;
}

interface IState {
  loaded: boolean;
}

class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      loaded: false,
    }
  }

  private timerID?: NodeJS.Timer;

  componentDidMount() {
    this.timerID = setTimeout(
      () => {
        this.setState({ loaded: true })
        this.timerID = undefined;
      },
      100
    );
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document
              .querySelector(this.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
        });
    });
  }

  componentWillUnmount() {
    if (this.timerID !== undefined) {
      clearInterval(this.timerID);
      this.timerID = undefined;
    }
  }

  render() {
    const helmet = this.state.loaded
      ? undefined
      : <Helmet><body className="is-preload" /></Helmet>

    return <div id="wrapper" className="divided">
      {helmet}
      
      {this.props.children}
      
      <Footer
        includeHomeLink={this.props.isHomePage !== true}
      />
    </div>
  }
}

export default Layout
