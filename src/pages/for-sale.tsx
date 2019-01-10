import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SectionContainer from '../components/SectionContainer';

const ForSale = () => (
  <Layout pageTitle="For Sale">
    <SectionContainer title="For Sale" addClassName="for-sale">
      <div>For Sale</div>
    </SectionContainer>
  </Layout>
);

export default ForSale;
