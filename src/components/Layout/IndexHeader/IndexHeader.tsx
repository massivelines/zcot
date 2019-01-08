import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

// TODO: make only one header, height controlled page or index

import Overlay from './Overlay';

import './IndexHeader.scss';

import bgImage1 from '../../../images/header/1.jpg';
import bgImage2 from '../../../images/header/2.jpg';
import bgImage3 from '../../../images/header/3.jpg';
import bgImage4 from '../../../images/header/4.jpg';

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

interface IndexHeaderProps {}
interface IndexHeaderState {
  menuIsOpen: boolean;
  image0: any;
  image1: any;
  imageOp: any;
}

// const IndexHeader: React.SFC<IndexHeaderProps> = () => (
class IndexHeader extends Component<IndexHeaderProps, IndexHeaderState> {
  constructor(props: any) {
    super(props);

    this.openMenuClickHandler = this.openMenuClickHandler.bind(this);
    this.updateHeaderBg = this.updateHeaderBg.bind(this);

    this.state = {
      menuIsOpen: false,
      image1: 1,
      image0: 0,
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
      image1: randomNum(
        bgImageArr.length,
        this.state.image0,
        this.state.image1,
      ),
    });
    this.setState({
      image0: randomNum(
        bgImageArr.length,
        this.state.image0,
        this.state.image1,
      ),
    });
    // console.log(this.state.image1, this.state.image0);
    this.interval = setInterval(this.updateHeaderBg, 9000);
  }

  componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
  }

  openMenuClickHandler() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  render() {
    return (
      <div className="index-header">
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
            {/* <img class="logo" src="./img/z-logo-flat.svg"> */}
          </div>
          <div className="left-line second-spacer" />
          <div className="menu-section darken left-line">
            <div className="menu-container">
              <button onClick={this.openMenuClickHandler}>
                Menu
                {/* {this.state.menuIsOpen ? 'Close' : 'Menu'} */}
              </button>
              {this.state.menuIsOpen && (
                <Overlay closeButton={this.openMenuClickHandler} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexHeader;
