import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';
import Square from '../components/Square';

import sponsors from '../data/sponsors';

import courtesynissan from '../images/sponsors/courtesynissan.jpeg';
import grubbs from '../images/sponsors/grubbs.jpg';
import jotech from '../images/sponsors/jotech.png';
import wireworks from '../images/sponsors/wireworks.png';
import zcardepot from '../images/sponsors/zcardepot.png';

const sponsorImg = {
  courtesynissan,
  grubbs,
  jotech,
  wireworks,
  zcardepot,
};

const buildSponsors = sponsors.map((sponData) => (
  <div className="sponsor-container" key={sponData.company}>
    <Square addClassName="rect">
      <div className="img-container">
        <img src={sponsorImg[sponData.logo]} className={sponData.logoMax} />
      </div>
    </Square>
    <div className="details">
      <div className="company">{sponData.company}</div>
      <div className="phone">{sponData.phone}</div>
      <div className="message">{sponData.message}</div>
      <div className="contact">{sponData.contact}</div>
      <div className="website">
        <a href={sponData.website} target="_blank">
          {sponData.website}
        </a>
      </div>
    </div>
  </div>
));

const Sponsors = () => (
  <>
    {/* Layout Component injected by plugin */}
    <Header pageTitle="Sponsors" />
    <SectionContainer title="Sponsors" addClassName="sponsors">
      {buildSponsors}
    </SectionContainer>
  </>
);

export default Sponsors;
