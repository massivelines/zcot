import React, { ReactNode } from 'react';
import IndexHeader from './IndexHeader';
import PageHeader from './PageHeader';
import Footer from './Footer';

interface LayoutProps {
  indexPage?: boolean;
  pageTitle: string;
  children: ReactNode;
}

const Layout: React.SFC<LayoutProps> = ({ children, indexPage, pageTitle }) => (
  <div className="layout">
    {indexPage ? <IndexHeader /> : <PageHeader pageTitle={pageTitle} />}
    {children}
    <Footer />
  </div>
);

export default Layout;

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           {children}
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )
