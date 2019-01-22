import React, { Component, ReactNode } from 'react';

interface EventProviderProps {
  loading: boolean;
  events: any[];
  featured: number;
}
interface EventProviderState {
  loading: boolean;
  events: any[];
  featured: number;
}

const EventContext = React.createContext<EventProviderProps | null>(null);

export const EventConsumer = EventContext.Consumer;

export class EventProvider extends Component<
  EventProviderProps,
  EventProviderState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      loading: true,
      events: [],
      featured: 0,
    };
  }

  componentDidMount() {
    fetch(
      'https://us-central1-zcot-website-api.cloudfunctions.net/calendarEvents',
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let countFeatured = 0;

        data.forEach((eventData: any) => {
          if (eventData.featured == true) {
            console.log(eventData);
            countFeatured += 1;
          }
        });
        this.setState({
          events: data,
          loading: false,
          featured: countFeatured,
        });
      });
    // .then(
    //   (result) => {
    //     // this.setState({
    //     //   isLoaded: true,
    //     //   items: result.items,
    //     // });
    //   },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   (error) => {
    //     console.log(error);
    //     // this.setState({
    //     //   isLoaded: true,
    //     //   error,
    //     // });
    //   },
    // );
  }

  render() {
    return (
      <EventContext.Provider value={this.state}>
        {this.props.children}
      </EventContext.Provider>
    );
  }
}

export default EventProvider;
