import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';

import { EventConsumer } from '../components/EventProvider/EventProvider';

const Membership = () => (
  <>
    {/* Layout Component injected by plugin */}
    <Header pageTitle="Membership" />
    <SectionContainer title="Details" addClassName="membership-details">
      <div>
        <EventConsumer>
          {(context) => {
            console.log(context);
            return (
              <>
                <div>{context.contextState.username}</div>
                <button onClick={context.changeUsername}>change</button>
              </>
            );
          }}
        </EventConsumer>
      </div>
    </SectionContainer>

    <SectionContainer title="Form" addClassName="membership-details">
      <div>Form</div>
    </SectionContainer>
  </>
);

export default Membership;
