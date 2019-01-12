import React from 'react';
import { Link } from 'gatsby';

import facebookLogo from '../../../images/flogo-HexRBG-Wht-58.svg';

const pageLinks = [
  { link: '/', title: 'Home' },
  { link: '/about', title: 'About' },
  { link: '/events', title: 'Events' },
  { link: '/membership', title: 'Membership' },
  { link: '/sponsors', title: 'Sponsors' },
  { link: '/for-sale', title: 'For Sale' },
  { link: '/by-laws', title: 'By-Laws' },
];

const Footer: React.SFC = () => (
  <footer>
    <div className="spacer" />
    <div className="footer-content">
      <div className="links-container">
        {pageLinks.map((mData) => (
          <div className="link" key={mData.title}>
            <Link to={mData.link}>{mData.title}</Link>
          </div>
        ))}
      </div>
      <div className="contact-container">
        <div className="facebook">
          <a href="#">
            <img className="f-logo" src={facebookLogo} />{' '}
            <span>Facebook Page</span>
          </a>
        </div>
        <div className="email">
          <a href="mailto:zcotofficers@zcluboftexas.org">
            zcotofficers@zcluboftexas.org
          </a>
        </div>

        <div className="facebook">
          <a href="#">
            <img className="f-logo" src={facebookLogo} />{' '}
            <span>Facebook Group</span>
          </a>
        </div>
      </div>
      <div className="reserved">© Z Club of Texas - All Rights Reserved</div>
    </div>
    <div className="spacer" />
  </footer>
);

export default Footer;
