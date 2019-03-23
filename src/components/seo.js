import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

class SEO extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StaticQuery
        query={detailsQuery}
        render={(data) => {
          const metaDescription =
            this.props.description || data.site.siteMetadata.description;
          const lang = 'en';
          return (
            <Helmet
              htmlAttributes={{ lang }}
              title={this.props.title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              // meta={
              //   [
              //     {
              //       name: `description`,
              //       content: metaDescription
              //     },
              //     {
              //       property: `og:title`,
              //       content: this.props.title
              //     },
              //     {
              //       property: `og:description`,
              //       content: metaDescription
              //     },
              //     {
              //       property: `og:type`,
              //       content: `website`
              //     },
              //     {
              //       name: `twitter:card`,
              //       content: `summary`
              //     },
              //     {
              //       name: `twitter:creator`,
              //       content: data.site.siteMetadata.author
              //     },
              //     {
              //       name: `twitter:title`,
              //       content: this.props.title
              //     },
              //     {
              //       name: `twitter:description`,
              //       content: metaDescription
              //     }
              //   ]
              // .concat(
              //   this.props.keywords.length > 0
              //     ? {
              //         name: `keywords`,
              //         content: this.props.keywords.join(`, `)
              //       }
              //     : []
              // )
              // .concat(this.props.meta)
              // }
            >
              <html lang="en" />
            </Helmet>
          );
        }}
      />
    );
  }
}

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
