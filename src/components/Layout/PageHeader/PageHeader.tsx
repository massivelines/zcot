import { Link } from 'gatsby';
import React from 'react';

interface PageHeaderProps {
  pageTitle: string;
}

const PageHeader: React.SFC<PageHeaderProps> = ({ pageTitle }) => (
  <div>
    <div>
      <h1>
        <Link to="/">{pageTitle}</Link>
      </h1>
    </div>
  </div>
);

export default PageHeader;
