import React, { Component } from 'react';
import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';
import Event from '../components/Event';

import Square from '../components/Square/';

import { EventConsumer } from '../components/EventProvider/EventProvider';

// todo: set it up so past events don't show up

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  render() {
    return (
      <>
        <Header pageTitle="Events" />
        <SectionContainer
          title="Events"
          linkTitle="JOIN US"
          linkAddress="/#/"
          addClassName="events"
        >
          <EventConsumer>
            {(context) => {
              if (context != null) {
                if (!context.loading) {
                  return context.events.map((eventData) => (
                    <Event data={eventData} key={eventData.title} />
                  ));
                } else {
                  return <div>Loading</div>;
                }
              } else {
                return null;
              }
            }}
          </EventConsumer>
          <div>Link to google calendar</div>
        </SectionContainer>
      </>
    );
  }
}

export default Events;
