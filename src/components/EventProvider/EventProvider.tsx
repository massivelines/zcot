import React, { Component, ReactNode } from 'react';

interface EventProviderProps {
  children?: ReactNode;
  value?: any;
  contextState?: any;
  changeUsername: any;
}
interface EventProviderState {
  value?: any;
  username: string;
  dateJoined: string;
  membershipLevel: string;
}

const EventContext = React.createContext<EventProviderProps | null>(null);

export const EventConsumer = EventContext.Consumer;

export class EventProvider extends Component<
  EventProviderProps,
  EventProviderState
> {
  constructor(props: any) {
    super(props);

    this.changeUsername = this.changeUsername.bind(this);

    this.state = {
      username: 'Crunchy Crunch',
      dateJoined: '9/1/18',
      membershipLevel: 'Silver',
    };
  }

  changeUsername() {
    this.setState({ username: 'Captain Captain' });
  }

  render() {
    return (
      <EventContext.Provider
        value={{
          contextState: this.state,
          changeUsername: this.changeUsername,
        }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}

export default EventProvider;
