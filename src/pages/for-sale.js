import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';
import Lightbox from '../components/LightBox';

class ForSale extends Component {
  // todo fix props: any
  constructor(props) {
    super(props);

    this.toggleLightbox = this.toggleLightbox.bind(this);

    this.state = {
      isOpen: false,
      imagesArr: null,
      imageNumber: 0,
    };
  }

  toggleLightbox(imagesArr, imageNumber) {
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({ imagesArr: imagesArr });
    this.setState({ imageNumber: imageNumber });
  }

  render() {
    return (
      <>
        <>
          {/* Layout Component injected by plugin */}
          <Header pageTitle="For Sale" />
          <SectionContainer title="For Sale" addClassName="for-sale">
            {/* TODO fix node: any */}
            {this.props.data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <div className="for-sale-post" key={node.frontmatter.name}>
                  <div className="text-container">
                    <div className="post-header">
                      <div className="title">{node.frontmatter.title}</div>
                      <div className="date">
                        Posted: {node.frontmatter.date}
                      </div>
                    </div>
                    <div className="price">{node.frontmatter.price}</div>
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{ __html: node.html }}
                    />
                    <div className="name">{node.frontmatter.name}</div>
                    <div className="location">{node.frontmatter.location}</div>
                    <div className="phone">
                      <a href={`tel:${node.frontmatter.phone}`}>
                        {node.frontmatter.phone}
                      </a>
                    </div>
                    <div className="email">
                      <a href={`mailto:${node.frontmatter.email}`}>
                        {node.frontmatter.email}
                      </a>
                    </div>
                  </div>
                  <div className="images-container">
                    {node.frontmatter.image1 && (
                      <div
                        className="image"
                        onClick={() => {
                          this.toggleLightbox(
                            [
                              node.frontmatter.image1.childImageSharp.fluid
                                .originalImg,
                              node.frontmatter.image2.childImageSharp.fluid
                                .originalImg,
                            ],
                            0,
                          );
                        }}
                      >
                        <Img
                          sizes={node.frontmatter.image1.childImageSharp.sizes}
                        />
                      </div>
                    )}
                    {node.frontmatter.image2 && (
                      <div
                        className="image"
                        onClick={() => {
                          this.toggleLightbox(
                            [
                              node.frontmatter.image1.childImageSharp.fluid
                                .originalImg,
                              node.frontmatter.image2.childImageSharp.fluid
                                .originalImg,
                            ],
                            1,
                          );
                        }}
                      >
                        <Img
                          sizes={node.frontmatter.image2.childImageSharp.sizes}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="information">
              <div className="disclaimer">
                The Z Club of Texas does not endorse or warranty any FOR SALE
                items on this website.
                <br />
                These items are presented as a courtesy to our readers and
                members only.
              </div>

              <div className="submit-ad">
                These classified ads are free to club members of the Z Club of
                Texas.
                <br />
                To submit an ad, call 'Mad' Mike Taylor at 817-329-1641, or
                email{' '}
                <a href="mailto:zmadmike@airmail.net">zmadmike@airmail.net</a>
              </div>
            </div>
          </SectionContainer>
        </>
        {this.state.isOpen && (
          <Lightbox
            imagesArr={this.state.imagesArr}
            imageNumber={this.state.imageNumber}
            toggleLightbox={this.toggleLightbox}
          />
        )}
      </>
    );
  }
}

export default ForSale;

export const forSaleQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
            price
            location
            name
            phone
            email
            image1 {
              childImageSharp {
                sizes(maxWidth: 630, maxHeight: 630, cropFocus: CENTER) {
                  originalImg
                  ...GatsbyImageSharpSizes
                }
                fluid(maxWidth: 1024) {
                  originalImg
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                sizes(maxWidth: 630, maxHeight: 630, cropFocus: CENTER) {
                  originalImg
                  ...GatsbyImageSharpSizes
                }
                fluid(maxWidth: 1024) {
                  originalImg
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
