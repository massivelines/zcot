import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SectionContainer from '../components/SectionContainer';

const Membership = () => (
  <Layout pageTitle="Membership">
    <SectionContainer title="Details" addClassName="membership-details">
      <div>Membership Details</div>
    </SectionContainer>

    <SectionContainer title="Form" addClassName="membership-details">
      <div>Form</div>
    </SectionContainer>
  </Layout>
);

export default Membership;
