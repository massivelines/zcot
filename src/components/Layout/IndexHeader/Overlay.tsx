import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

interface OverlayProps {
  closeButton: any;
}

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
        <div>Overlay</div>
        <button onClick={this.props.closeButton}>Close</button>
      </div>,
      document.body,
    );
  }
}

export default Overlay;
