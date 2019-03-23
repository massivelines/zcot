import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

const SectionContainer = ({
  children,
  title,
  linkAddress,
  linkTitle,
  addClassName,
}) => (
  <section className={`section-container ${addClassName}`}>
    <hr className="top-hr" />
    <div className="section-layout">
      <div className="title-container">
        <div className="title">{title}</div>
      </div>
      <div className="content">{children}</div>
      <div className="link-container">
        <div className="link">
          {linkTitle && (
            <Link to={linkAddress ? linkAddress : '/'}>{linkTitle}</Link>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default SectionContainer;
