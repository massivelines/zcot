import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';
import Striptags from 'striptags';

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
      </>
    );
  }
}

// class Events extends Component<EventProps, EventState> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: [],
//     };
//   }

//   componentDidMount() {
//     fetch(
//       'https://us-central1-zcot-website-api.cloudfunctions.net/calendarEvents',
//     )
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => console.log(data));
//     // .then(
//     //   (result) => {
//     //     // this.setState({
//     //     //   isLoaded: true,
//     //     //   items: result.items,
//     //     // });
//     //   },
//     //   // Note: it's important to handle errors here
//     //   // instead of a catch() block so that we don't swallow
//     //   // exceptions from actual bugs in components.
//     //   (error) => {
//     //     console.log(error);
//     //     // this.setState({
//     //     //   isLoaded: true,
//     //     //   error,
//     //     // });
//     //   },
//     // );
//   }

//   render() {
//     // return (
//     //   <>
//     //     <Header pageTitle="Events" />
//     //     <div>Events</div>
//     //   </>
//     // );
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <>
//           {/* Layout Component injected by plugin */}
//           <Header pageTitle="Events" />
//           <SectionContainer
//             title="Events"
//             linkTitle="JOIN US"
//             linkAddress="/#/"
//             addClassName="events"
//           >
//             <div>Events</div>
//             {/* {items.map((mData, key) => {
//               // extract link to event from description
//               const WEB_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/gi;
//               const linkArray = mData.description.match(WEB_REGEX);
//               // use last link in linkArray
//               const eventLink = linkArray[linkArray.length - 1];

//               // delete link in description
//               const stripedDescription = Striptags(mData.description).replace(
//                 eventLink,
//                 '',
//               );

//               // if longer that 180 shorten then ...
//               let description;
//               if (stripedDescription.length > 177) {
//                 description = stripedDescription.substring(0, 177) + '...';
//               } else {
//                 description = stripedDescription;
//               }

//               let date;
//               if (mData.start.dateTime) {
//                 date = mData.start.dateTime;
//                 date = new Date(date);
//               } else {
//                 date = mData.start.date;
//                 date = new Date(date);
//               }
//               date = `${date.getMonth() +
//                 1}\/${date.getDate()}\/${date.getFullYear()}`;

//               return (
//                 <div className="event-container" key={mData.summary + key}>
//                   <div className="event-image-container">
//                     <Square addClassName="rect">
//                       <div
//                         className="event-image"
//                         style={{
//                           backgroundImage: `url(${`https://drive.google.com/uc?export=view&id=${
//                             mData.attachments[0].fileId
//                           }`})`,
//                         }}
//                       > */}
//             {/* <img
//                         src={`https://drive.google.com/uc?export=view&id=${
//                           mData.attachments[0].fileId
//                         }`}
//                       /> */}
//             {/* </div> */}
//             {/* </Square> */}
//             {/* </div> */}
//             {/* <div className="event-details">
//                     <div className="title">{mData.summary}</div>
//                     <div className="description">{description}</div>
//                     <div className="footer">
//                       <div className="date">{date}</div>
//                       <div className="link">
//                         <a href={eventLink} target="_blank">
//                           Link
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//             ); })}
//             {/* <img src="https://drive.google.com/uc?export=view&id=1YrKsxUAFZtxPUcL8gSEeOCyclM7uJgPO" /> */}
//           </SectionContainer>
//         </>
//       );
//     }
//   }
// }

export default Events;
