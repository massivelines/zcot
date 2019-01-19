import React, { Component } from 'react';
import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';
import Event from '../components/Event';

import Square from '../components/Square/';

import { EventConsumer } from '../components/EventProvider/EventProvider';

// todo: set it up so past events don't show up

interface EventProps {}
interface EventState {
  error: any;
  isLoaded: boolean;
  items: any;
}

class Events extends Component<EventProps, EventState> {
  constructor(props: any) {
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
              console.log(context);
              if (!context.loading) {
                return context.events.map((eventData) => (
                  <Event data={eventData} key={eventData.title} />
                ));
              } else {
                return <div>Loading</div>;
              }
            }}
          </EventConsumer>
        </SectionContainer>
      </>
    );
  }
}

export default Events;
