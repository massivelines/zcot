import React, { Component, ReactNode } from 'react';

interface EventProviderProps {}
interface EventProviderState {
  loading: boolean;
  events: any[];
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
        this.setState({ events: data, loading: false });
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
