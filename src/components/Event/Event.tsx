import React from 'react';
import Square from '../Square';

const Event = ({ data }) => {
  return (
    <div className="event-container">
      <div className="event-image-container">
        <Square addClassName="rect">
          <div
            className="event-image"
            style={{
              backgroundImage: `url(${data.image}`,
            }}
          />
        </Square>
      </div>
      <div className="event-details">
        <div className="header">
          <div className="title">{data.title}</div>
          <div className="date">{data.date}</div>
        </div>
        <div className="description">{data.description}</div>
        <div className="footer">
          <div className="location">{data.location}</div>
          <div className="link">
            <a href={data.link} target="_blank">
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
