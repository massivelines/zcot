import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import SectionContainer from '../components/SectionContainer';
import Square from '../components/Square';

import '../scss/main.scss';

const IndexPage = () => (
  <Layout indexPage pageTitle="Home">
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <SectionContainer
      title="About"
      linkTitle="About The Club"
      linkAddress="/about/"
      addClassName="index-about"
    >
      <Square>
        <div>1</div>
      </Square>
      <Square>
        <div>2</div>
      </Square>
      <Square>
        <div>3</div>
      </Square>
      <Square>
        <div>4</div>
      </Square>
      <Square>
        <div>5</div>
      </Square>
    </SectionContainer>

    <SectionContainer
      title="Events"
      linkTitle="More Events"
      linkAddress="/events/"
      addClassName="index-events"
    >
      <Square>
        <div>Event 1</div>
      </Square>
      <Square>
        <div>Event 2</div>
      </Square>
      <Square>
        <div>Event 3</div>
      </Square>
    </SectionContainer>

    <SectionContainer
      title="Membership"
      linkTitle="Join"
      linkAddress="/membership/"
      addClassName="index-membership"
    >
      <Square>
        <div>1</div>
      </Square>
      <Square>
        <div>2</div>
      </Square>
      <Square>
        <div>3</div>
      </Square>
      <Square>
        <div>4</div>
      </Square>
      <Square>
        <div>5</div>
      </Square>
      <Square>
        <div>6</div>
      </Square>
    </SectionContainer>
  </Layout>
);

export default IndexPage;
