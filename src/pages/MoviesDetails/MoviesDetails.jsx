// import { Button } from '@mui/material';
import StyledLink from 'components/Navigation/Navigation.styled';
import useFetchEvent from 'hooks/useFetchEvent';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FilmInfo, FilmImg, ButtonGoBack } from './MoviesDetails.styled';
import { MdKeyboardBackspace  } from 'react-icons/md';

const MoviesDetails = () => {
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const data = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <ButtonGoBack
        variant="outlined"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        <MdKeyboardBackspace  style={{ width: 30, height: 30 }} />      
      </ButtonGoBack>
      {data && (
        <>
          <FilmInfo>
            <FilmImg src={baseURL + data.poster_path} alt="" height="450px" />
            <div>
              <h2>{data.title}</h2>
              <p>User Score: {data.vote_average.toFixed(1)}</p>
              <h3>Overview</h3>
              <p>{data.overview}</p>
              <h3>Genres</h3>
              <p>{data.genres.map(el => el.name).join(' ')}</p>
            </div>
          </FilmInfo>
          <p>Additional information</p>
          <StyledLink to="cast" state={location.state}>
            Cast
          </StyledLink>
          <StyledLink to="reviews" state={location.state}>
            Reviews
          </StyledLink>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MoviesDetails;