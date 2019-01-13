import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import Overlay from './Overlay';

import bgImage1 from '../../images/headerBg/1.jpg';
import bgImage2 from '../../images/headerBg/2.jpg';
import bgImage3 from '../../images/headerBg/3.jpg';
import bgImage4 from '../../images/headerBg/4.jpg';

import logo from '../../images/z-logo-flat.svg';

const bgImageArr = [bgImage1, bgImage2, bgImage3, bgImage4];

// returns a random number for the header background different from the previous 2
const randomNum = (
  length: number,
  notEqual1?: number,
  notEqual0?: number,
): number => {
  let holdNumber = Math.floor(Math.random() * length);
  if (holdNumber == notEqual0 || holdNumber == notEqual1) {
    do {
      holdNumber = Math.floor(Math.random() * length);
    } while (holdNumber == notEqual0 || holdNumber == notEqual1);
  }
  return holdNumber;
};

interface HeaderProps {
  indexPage?: boolean;
  pageTitle: string;
}
interface HeaderState {
  menuIsOpen: boolean;
  image0: any;
  image1: any;
  imageOp: any;
}

// const Header: React.SFC<HeaderProps> = () => (
class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: any) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.updateHeaderBg = this.updateHeaderBg.bind(this);

    this.state = {
      menuIsOpen: false,
      image1: -1,
      image0: -1,
      imageOp: 1,
    };
  }

  updateHeaderBg() {
    if (this.state.imageOp === 1) {
      this.setState({
        image1: randomNum(
          bgImageArr.length,
          this.state.image0,
          this.state.image1,
        ),
      });
      this.setState({ imageOp: 0 });
    } else {
      this.setState({
        image0: randomNum(
          bgImageArr.length,
          this.state.image1,
          this.state.image0,
        ),
      });
      this.setState({ imageOp: 1 });
    }
  }

  componentDidMount() {
    this.setState({
      image1: randomNum(bgImageArr.length),
    });
    this.setState({
      image0: randomNum(bgImageArr.length, this.state.image1),
    });

    if (this.props.indexPage) {
      this.interval = setInterval(this.updateHeaderBg, 6000);
    }
  }

  componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
  }

  toggleMenu() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen }, () => {
      if (this.state.menuIsOpen) {
        disableBodyScroll(document.body, {
          reserveScrollBarGap: true,
        });
        clearTimeout(this.scrollTimer);
      } else {
        setTimeout(() => {
          this.scrollTimer = enableBodyScroll(document.body);
        }, 300);
      }
    });
  }

  render() {
    return (
      // when not the index page set class 'page' to control height and page title
      <div className={`index-header ${!this.props.indexPage && 'page'}`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${bgImageArr[this.state.image1]})` }}
        />
        <div
          className="new-background-image"
          style={{
            backgroundImage: `url(${bgImageArr[this.state.image0]})`,
            opacity: this.state.imageOp,
            transition: 'opacity 2s ease-in-out',
          }}
        />
        <div className="grid-container">
          <div className="left-section darken" />
          <div className="darken left-line first-spacer logo-holder">
            <img className="logo" src={logo} />
          </div>
          <div className="left-line second-spacer">
            {/* if it is a page render pageTitle */}
            {!this.props.indexPage && (
              <div className="page-title">{this.props.pageTitle}</div>
            )}
          </div>
          <div className="menu-section darken left-line">
            <div className="menu-container">
              <a href="#" className="menu-button" onClick={this.toggleMenu}>
                <div
                  className={`hamburger-container ${
                    this.state.menuIsOpen ? 'open' : ''
                  }`}
                >
                  <div className="bar1" />
                  <div className="bar2" />
                  <div className="bar3" />
                </div>
                <div
                  style={{ opacity: this.state.menuIsOpen ? 0 : 1 }}
                  className="menu-text"
                >
                  menu
                </div>
                <div
                  style={{ opacity: this.state.menuIsOpen ? 1 : 0 }}
                  className="menu-text"
                >
                  close
                </div>
              </a>
              {/* for building, if windows exist render Overlay */}
              {typeof window !== `undefined` && (
                <Overlay
                  toggleMenu={this.toggleMenu}
                  open={this.state.menuIsOpen}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
