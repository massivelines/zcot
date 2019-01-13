import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

import Header from '../components/Header';
import SEO from '../components/seo';
import SectionContainer from '../components/SectionContainer';
import Square from '../components/Square';

import '../scss/main.scss';

import carShows from '../images/indexPage/car-shows.jpg';
import caravan from '../images/indexPage/caravan.jpg';
import charities from '../images/indexPage/charities.jpg';
import cruises from '../images/indexPage/cruises.jpg';
import track from '../images/indexPage/track.jpg';
import discounts from '../images/indexPage/discounts.jpg';

interface AboutSquareProps {
  number: number;
  svg: ReactNode;
  text: string;
}

interface MemberSquareProps {
  text: string;
  bgImage: string;
  id: string;
}

const AboutSquare: React.SFC<AboutSquareProps> = ({ number, svg, text }) => {
  return (
    <div className="stat-container">
      <div className="number">{number}</div>
      <div className="img">{svg}</div>
      <div className="text">{text}</div>
    </div>
  );
};

const MemberSquare: React.SFC<MemberSquareProps> = ({ text, bgImage, id }) => {
  return (
    <div className="mem-image">
      <div
        className="backdrop"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${bgImage})`,
        }}
      />
      <div className="knockout">{text}</div>
    </div>
  );
};

const IndexPage = () => (
  <>
    {/* Layout Component injected by plugin */}
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <Header indexPage pageTitle="Home" />
    <SectionContainer
      title="About"
      linkTitle="About The Club"
      linkAddress="/about/"
      addClassName="index-about"
    >
      <Square>
        <AboutSquare
          number={1986}
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87 96.67">
              <title>Untitled-1</title>
              <path d="M77.33,87H9.67V33.83H77.33M62.83,0V9.67H24.17V0H14.5V9.67H9.67A9.63,9.63,0,0,0,0,19.33V87a9.67,9.67,0,0,0,9.67,9.67H77.33A9.67,9.67,0,0,0,87,87V19.33a9.66,9.66,0,0,0-9.67-9.66H72.5V0M67.67,53.17H43.5V77.33H67.67Z" />
            </svg>
          }
          text="Established"
        />
      </Square>
      <Square>
        <AboutSquare
          number={221}
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.76 80.67">
              <title>Untitled-1</title>
              <path d="M86.43,46.1a39.79,39.79,0,0,0-5.59.28c6.68,4.84,11.35,11.24,11.35,19.88V80.67h34.57V66.26c0-13.42-26.91-20.16-40.33-20.16m-46.1,0C26.91,46.1,0,52.84,0,66.26V80.67H80.67V66.26c0-13.42-26.91-20.16-40.34-20.16m0-11.53A17.29,17.29,0,1,0,23.05,17.29,17.29,17.29,0,0,0,40.33,34.57m46.1,0A17.29,17.29,0,1,0,69.14,17.29,17.28,17.28,0,0,0,86.43,34.57Z" />
            </svg>
          }
          text="Members"
        />
      </Square>
      <Square>
        <AboutSquare
          number={89}
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.29 97.64">
              <path d="M207.57,68.17h31.24L198.49,97.64,77.31,96.31l-54,1.33L0,86.13,103.56,46.41,82.5,39.54,105.89,31l20,6.89,48.17-19.69s-69.94.61-78.58,2.61-21.93,9.52-21.93,9.52H38.32S62.15,12.2,77.82,3c19.43-6.2,78.73-1.28,123.52.41,21.58.82,37.26.26,37.26.26L264.29,15s-52.41,19.63-97.22,37l22.32,7.67L166.9,67.06l-21-6.84c-25.33,9.8-47.1,19-47.1,19s73.32,1.34,88.17-1.76S207.57,68.17,207.57,68.17Z" />
            </svg>
          }
          text="240Z - 280ZX"
        />
      </Square>
      <Square>
        <AboutSquare
          number={58}
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151.85 76.86">
              <title>Untitled-1</title>
              <polygon points="151.85 57.96 151.85 76.86 0 76.86 0 62.13 84.41 18.93 5.68 18.93 5.68 0 149.01 0 149.01 16.15 67.3 57.96 151.85 57.96" />
            </svg>
          }
          text="300ZX"
        />
      </Square>
      <Square>
        <AboutSquare
          number={48}
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 279.01 132.57">
              <title>Untitled-1</title>
              <path d="M138.78,65.42l17.38-8.32,17.42-8.24,34.84-16.48,34.93-16.29L260.85,8l17.53-8h0L78.07,1.08A56.8,56.8,0,0,0,42.76,13.64l-9.29,7.48s27.2-2.56,36.3-3C96.1,17,175.2,17.31,175.2,17.31L26,115.47,0,132.57q34.56-17.05,69.29-33.78C92.4,87.55,115.61,76.54,138.78,65.42Z" />
              <path d="M226.21,110.89c-29.49,1.8-118.18,1.16-118.18,1.16L255.34,15.16,278.38,0,261.11,8.55l-17.3,8.5L209.15,33.91,174.4,50.57,157,58.9,139.6,67.15c-23.23,11-46.41,22.06-69.7,32.91S23.35,121.85,0,132.57H219.19a56.73,56.73,0,0,0,30.57-8.93L279,105S239.47,110.08,226.21,110.89Z" />
            </svg>
          }
          text="350Z - 370Z"
        />
      </Square>
    </SectionContainer>
    <SectionContainer
      title="Events"
      linkTitle="More Events"
      linkAddress="/events/"
      addClassName="index-events"
    >
      <Square>
        <div>Event 1</div>
      </Square>
      <Square>
        <div>Event 2</div>
      </Square>
      <Square>
        <div>Event 3</div>
      </Square>
    </SectionContainer>
    <SectionContainer
      title="Membership"
      linkTitle="Join"
      linkAddress="/membership/"
      addClassName="index-membership"
    >
      <Square>
        <MemberSquare id="cruises" text="Cruises" bgImage={cruises} />
      </Square>
      <Square>
        <MemberSquare id="carShows" text="Car Shows" bgImage={carShows} />
      </Square>
      <Square>
        <MemberSquare id="caravan" text="Caravan" bgImage={caravan} />
      </Square>
      <Square>
        <MemberSquare id="track" text="Track Days" bgImage={track} />
      </Square>
      <Square>
        <MemberSquare id="charities" text="Charities" bgImage={charities} />
      </Square>
      <Square>
        <MemberSquare id="discounts" text="Tech Sessions" bgImage={discounts} />
      </Square>
    </SectionContainer>
  </>
);

export default IndexPage;
