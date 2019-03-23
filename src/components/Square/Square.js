import React, { ReactNode } from 'react';

const Square = ({ children, addClassName }) => (
  <div className={`square ${addClassName}`}>
    <div className="square-content">{children}</div>
  </div>
);

export default Square;
