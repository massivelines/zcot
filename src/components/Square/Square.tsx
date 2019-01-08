import React, { ReactNode } from 'react';

interface SquareProps {
  children: ReactNode;
  addClassName?: string;
}

const Square: React.SFC<SquareProps> = ({ children, addClassName }) => (
  <div className={`square ${addClassName}`}>
    <div className="square-content">{children}</div>
  </div>
);

export default Square;
