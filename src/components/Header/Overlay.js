import React, { Component } from 'react';
import { Link } from 'gatsby';
import ReactDOM from 'react-dom';

class Overlay extends Component {
  constructor(props) {
    super(props);

    // this.el = document.body;
    this.el = typeof document === 'undefined' ? '' : document.body;
  }

  render() {
    return ReactDOM.createPortal(
      <div
        style={{
          opacity: this.props.open ? 1 : 0,
          visibility: this.props.open ? 'visible' : 'hidden',
        }}
        className="overlay"
      >
        <div className="spacer" />
        <nav className="links-list">
          <ul>
            <li>
              <Link to="/" onClick={this.props.toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about/" onClick={this.props.toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/events/" onClick={this.props.toggleMenu}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/membership/" onClick={this.props.toggleMenu}>
                Membership
              </Link>
            </li>
            <li>
              <Link to="/sponsors/" onClick={this.props.toggleMenu}>
                Sponsors
              </Link>
            </li>
            <li>
              <Link to="/for-sale/" onClick={this.props.toggleMenu}>
                For Sale
              </Link>
            </li>
          </ul>
        </nav>
        <div className="spacer" />
      </div>,
      this.el,
    );
  }
}

export default Overlay;
