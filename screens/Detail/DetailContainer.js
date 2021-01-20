import React, { useState, useEffect } from 'react';
import { movieApi } from '../../API';
import DetailPresenter from './DetailPresenter';

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [movie, setMovie] = useState({
    title,
    backgroundImage,
    poster,
    votes,
    overview,
  });

  const getData = async () => {
    const [getMovie, getMovieError] = await movieApi.movie(id);
    setMovie({
      ...getMovie,
      title: getMovie.title,
      backgroundImage: getMovie.backdrop_path,
      poster: getMovie.poster_path,
      overview: getMovie.overview,
      votes: getMovie.vote_average,
    });
  };

  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });
  return <DetailPresenter {...movie} />;
};
