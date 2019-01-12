import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';

const key = '';

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

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/1mbkv206g8se0195p3ko3kbn58@group.calendar.google.com/events?key=${key}`,
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          {/* Layout Component injected by plugin */}
          <Header pageTitle="Events" />
          <SectionContainer
            title="Events"
            linkTitle="JOIN US"
            linkAddress="/#/"
            addClassName="events"
          >
            {items.map((mData) => {
              console.log(mData);
              // if (mData.attachments) {
              //   // console.log(mData.attachments[0]);
              //   console.log(
              //     `${mData.attachments[0].fileUrl}/${
              //       mData.attachments[0].title
              //     }`,
              //   );
              // }
              return (
                <div className="holder">
                  <div>{mData.summary}</div>
                  {/* {mData.attachments && (
                    <img
                      src={`${mData.attachments[0].fileUrl}/${
                        mData.attachments[0].title
                      }`}
                    />
                  )} */}
                </div>
              );
            })}
            {/* <img src="https://drive.google.com/uc?export=view&id=1YrKsxUAFZtxPUcL8gSEeOCyclM7uJgPO" /> */}
          </SectionContainer>
        </>
      );
    }
  }
}

export default Events;
