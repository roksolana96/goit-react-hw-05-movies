import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <Navigation />
        </Header>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Layout;


// import { NavLink, Outlet } from "react-router-dom";

// const Layout = () => {
//     return (
//     <div>
//       <header>
//         <ul>
//           <li>
//               <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//               <NavLink to="/movies">Movies</NavLink>
//           </li>
//         </ul>
//       </header>
//     <main>
//       <Outlet />
//     </main>
//     <footer>Footer</footer>
//     </div>
//     )
//     };
    
//   export default Layout;