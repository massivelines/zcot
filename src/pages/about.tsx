import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const About = () => (
  <Layout pageTitle="About">
    About Page
    <Link to="/">Index Link</Link>
  </Layout>
);

export default About;
