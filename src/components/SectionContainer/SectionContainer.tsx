import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

interface SectionContainerProps {
  title: string;
  linkTitle: string;
  linkAddress: string;
  children: ReactNode;
  addClassName?: string;
}

const SectionContainer: React.SFC<SectionContainerProps> = ({
  children,
  title,
  linkAddress,
  linkTitle,
  addClassName,
}) => (
  <section className={`section-container ${addClassName}`}>
    <hr className="top-hr" />
    <div className="title-container">
      <div className="title">{title}</div>
    </div>
    <div className="content">{children}</div>
    <div className="link-container">
      <div className="link">
        <Link to={linkAddress}>{linkTitle}</Link>
      </div>
    </div>
  </section>
);

export default SectionContainer;
