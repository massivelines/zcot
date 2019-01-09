import React, { Component } from 'react';
import { Link } from 'gatsby';
import ReactDOM from 'react-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

interface OverlayProps {}

class Overlay extends Component<OverlayProps> {
  targetElement = null;

  componentDidMount() {
    disableBodyScroll(document.body, {
      reserveScrollBarGap: true,
    });
  }

  componentWillUnmount() {
    enableBodyScroll(document.body);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        <div className="spacer" />
        <nav className="links-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/events/">Events</Link>
            </li>
            <li>
              <Link to="/membership/">Membership</Link>
            </li>
            <li>
              <Link to="/sponsors/">Sponsors</Link>
            </li>
            <li>
              <Link to="/for-sale/">For Sale</Link>
            </li>
          </ul>
        </nav>
        <div className="spacer" />
      </div>,
      document.body,
    );
  }
}

export default Overlay;
