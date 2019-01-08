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
    <div className="title">{title}</div>
    <div className="content">{children}</div>
    <div className="link">
      <Link to={linkAddress}>{linkTitle}</Link>
    </div>
  </section>
);

export default SectionContainer;
