import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';

const officers = [
  {
    title: 'President',
    name: 'Shawn Rhodes',
    email: 'president@zcluboftexas.com',
  },
  {
    title: 'Vice President',
    name: 'Ruger Carstens',
    email: 'vicepresident@zcluboftexas.com',
  },
  {
    title: 'Secretary',
    name: 'TBD',
    email: 'secretary@zcluboftexas.com',
  },
  {
    title: 'Treasurer',
    name: 'Nina Miriani',
    email: 'treasurer@zcluboftexas.com',
  },
];

const committeeMembers = [
  {
    title: 'Advertising',
    members: [
      {
        name: 'OPEN',
        email: 'president@zcluboftexas.com',
        phoneNumber: null,
      },
    ],
  },

  {
    title: 'Appraisals',
    members: [
      {
        name: 'Bill Reagan',
        email: null,
        phoneNumber: '573-216-4791',
      },
      {
        name: 'Steve Ham',
        email: null,
        phoneNumber: '214-674-3368',
      },
    ],
  },

  {
    title: 'Boutique',
    members: [
      {
        name: 'Glen Newton	',
        email: 'zcotboutique@aol.com',
        phoneNumber: '817-421-0139',
      },
    ],
  },

  {
    title: 'Car Shows	',
    members: [
      {
        name: 'Jim Arnett	',
        email: 'carshows@zcluboftexas.com',
        phoneNumber: '469-534-6207',
      },
    ],
  },

  {
    title: 'Christmas Party',
    members: [
      {
        name: 'Pam & Steve Ruzic',
        email: 'christmasparty@zcluboftexas.com',
        phoneNumber: '972-530-0307',
      },
    ],
  },

  {
    title: 'Guest Speakers',
    members: [
      {
        name: 'Open',
        email: null,
        phoneNumber: null,
      },
    ],
  },

  {
    title: 'Members',
    members: [
      {
        name: 'Mike Taylor	',
        email: 'membership@zcluboftexas.com',
        phoneNumber: '817-329-1641',
      },
    ],
  },

  {
    title: 'Motorsports',
    members: [
      {
        name: 'Renee Hayden',
        email: 'motorsports@zcluboftexas.com',
        phoneNumber: '972-966-0125',
      },
    ],
  },

  {
    title: 'title',
    members: [
      {
        name: 'Edward Cheung',
        email: 'techsessions@zcluboftexas.com',
        phoneNumber: '972-442-7599',
      },
    ],
  },

  {
    title: 'Texas Tours',
    members: [
      {
        name: 'Open',
        email: null,
        phoneNumber: null,
      },
    ],
  },

  {
    title: 'Webmaster',
    members: [
      {
        name: 'Lois Liconte	',
        email: 'webmaster@zcluboftexas.org',
        phoneNumber: '214-762-9702',
      },
    ],
  },

  {
    title: 'ZCCA Delegate	',
    members: [
      {
        name: 'Mike Blanco	',
        email: 'president@zcluboftexas.com ',
        phoneNumber: 'null',
      },
    ],
  },
];

const About = () => (
  <>
    {/* Layout Component injected by plugin */}
    <Header pageTitle="About" />
    <SectionContainer
      title="About"
      linkTitle="CLUB BY-LAWS"
      linkAddress="/#/"
      addClassName="about-about"
    >
      {/* <div className="be">
        test Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        malesuada nisi ac ex dapibus ultricies et sed velit. Aliquam erat
      </div>
      <div className="be">
        test Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        malesuada nisi ac ex dapibus ultricies et sed velit. Aliquam erat
      </div> */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada
        nisi ac ex dapibus ultricies et sed velit. Aliquam erat volutpat. Ut
        tincidunt tellus scelerisque massa porta, eu iaculis tellus ullamcorper.
        Maecenas non hendrerit velit. Morbi tincidunt lectus et porttitor
        ornare. Praesent egestas placerat aliquet. Pellentesque ornare, nunc vel
        elementum laoreet, est lectus gravida arcu, sed commodo neque mi sit
        amet nulla. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; In ullamcorper arcu eu mauris molestie,
        eu finibus arcu venenatis. Mauris bibendum elit magna, et euismod lacus
        elementum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Morbi malesuada nisi ac ex dapibus ultricies et sed velit. Aliquam erat
        volutpat. Ut tincidunt tellus scelerisque massa porta, eu iaculis tellus
        ullamcorper. Maecenas non hendrerit velit. Morbi tincidunt lectus et
        porttitor ornare. Praesent egestas placerat aliquet. Pellentesque
        ornare, nunc vel elementum laoreet, est lectus gravida arcu, sed commodo
        neque mi sit amet nulla. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia Curae; In ullamcorper arcu eu mauris
        molestie, eu finibus arcu venenatis. Mauris bibendum elit magna, et
        euismod lacus elementum sed.
      </p>
    </SectionContainer>

    <SectionContainer
      title="Meetings"
      linkTitle="DIRECTIONS"
      linkAddress="/#/"
      addClassName="about-meetings"
    >
      <div className="address-container">
        <p>Our official club meetings on the 3rd Thursday of each month at:</p>
        {/* TODO how to set up address */}
        <div>
          New New Buffet,
          <br />
          3822 Belt Line Road <br />
          Addison, Texas 75001 <br />
          (972) 243-1198
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.0015169753854!2d-96.85131224382589!3d32.950849203160054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c26c3fff9da39%3A0x1ecc3a05f9ae416b!2sNew+New+Buffet!5e0!3m2!1sen!2sus!4v1529374625637"
          width="600"
          height="450"
          // frameborder="0"
          style={{ border: 0 }}
          // allowfullscreen
        />
      </div>
    </SectionContainer>

    <SectionContainer
      title="Officers"
      linkTitle="CONTACT"
      linkAddress="/#/"
      addClassName="about-meetings"
    >
      <div>
        {officers.map((mdata, key) => {
          return <div key={key}>{mdata.name}</div>;
        })}
      </div>
    </SectionContainer>

    <SectionContainer
      title="Committees"
      linkTitle="MEMBERSHIP"
      linkAddress="/#/"
      addClassName="about-meetings"
    >
      <div>
        {committeeMembers.map((mdata, key) => {
          return <div key={key}>{mdata.title}</div>;
        })}
      </div>
    </SectionContainer>
  </>
);

export default About;
