import React, { ReactNode } from 'react';
import Transition from '../Transition';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  location: any;
}

const Layout: React.SFC<LayoutProps> = ({ children, location }) => (
  <Transition location={location}>
    <div className="layout">
      {children}
      <Footer />
    </div>
  </Transition>
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
