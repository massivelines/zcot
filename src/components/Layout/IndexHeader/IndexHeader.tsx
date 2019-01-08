import React, { Component } from 'react';
import { Link } from 'gatsby';

// TODO: make only one header, height controlled page or index

import Overlay from './Overlay';

import './IndexHeader.scss';

const bgImagesArr = ['../../../images/header-bg/1.jpg'];

interface IndexHeaderProps {}
interface IndexHeaderState {
  menuIsOpen: boolean;
}

// const IndexHeader: React.SFC<IndexHeaderProps> = () => (
class IndexHeader extends Component<IndexHeaderProps, IndexHeaderState> {
  constructor(props: any) {
    super(props);

    this.openMenuClickHandler = this.openMenuClickHandler.bind(this);

    this.state = {
      menuIsOpen: false,
    };
  }

  openMenuClickHandler() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  render() {
    return (
      <div className="index-header">
        <div
          className="background-image"
          style={{ backgroundImage: 'url(' + bgImagesArr[0] + ')' }}
        />
        <div className="new-background-image" />
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
