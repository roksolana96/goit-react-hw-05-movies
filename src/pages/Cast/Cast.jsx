import { fetchFilmCredits } from 'services/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  CastImg, 
  CastItem, 
  CastList } from './Cast.styled';

const Cast = () => {
  const [event, setEvent] = useState([]);
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const noImagePoster =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  const { movieId } = useParams();
  useEffect(() => {
    fetchFilmCredits(movieId).then(data => setEvent(data.cast));
  }, [movieId, setEvent]);

  return (
    <>
      {event.length !== 0 ? (
        <CastList>
          {event.map(el => {
            return (
              <CastItem key={el.id}>
                <CastImg
                  src={
                    el.profile_path ? baseURL + el.profile_path : noImagePoster
                  }
                  alt=""
                  width="142"
                />
                <div>
                  <h2>Actor: {el.name}</h2>
                  <h2>Character: {el.character}</h2>
                </div>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <p>There are no reviews</p>
      )}
    </>
  );
};

export default Cast;