import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { MdPageview  } from 'react-icons/md';
import { fetchSearchFilm } from 'services/fetchApi';
import { 
  SearchFormInput, 
  SearchButton, 
  SearchForm } from './Movies.styled';
import {
  MovieName,
  GalleryList,
  MovieImage,
  MovieInfo,
  PhotoCard,
} from '../Home/Home.styled';


const Movies = () => {
  const [event, setEvent] = useState([]);
  const [search, setSearchParams] = useSearchParams();


  const filmName = search.get('query');
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const noImagePoster =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  const location = useLocation();

  useEffect(() => {
    if (search === null || search === '') return ;
    fetchSearchFilm(filmName).then(setEvent);
  }, [search, filmName]);

  

  const handleSubmit = e => {
    e.preventDefault();



    const form = e.target;
    setSearchParams({ query: e.target.elements.query.value });
    form.reset();

    
  };

  return (
    <>
      <SearchForm action="" onSubmit={handleSubmit}>
        <SearchFormInput
          name="query"
          color="secondary"
          id="outlined-basic"
          label="Search Film"
          variant="outlined"
          placeholder="Search film"
        />

        <SearchButton type="submit" variant="outlined" size="medium" sx={{ ml: 2 }}>
          <MdPageview  style={{ width: 30, height: 30 }} />
        </SearchButton>
      </SearchForm>
      
      {event && (
        <GalleryList>
          {event.map(el => {
            return (
              <PhotoCard key={el.id}>
                <Link to={`/movies/${el.id}`} state={{ from: location }}>
                  <MovieImage
                    src={
                      el.poster_path ? baseURL + el.poster_path : noImagePoster
                    }
                    alt=""
                    width="500"
                    height="750"
                  />
                  <MovieInfo>
                    <MovieName>{el.title ? el.title : el.name}</MovieName>
                  </MovieInfo>
                </Link>
              </PhotoCard>
            );
          })}
        </GalleryList>
      )}
    </>
  );
};

export default Movies;


