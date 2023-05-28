import StyledLink from './Navigation.styled';

const Navigation = () => {
  return (
    <header>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </header>
  );
};

export default Navigation;