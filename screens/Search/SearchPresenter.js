import React from 'react';
import styled from 'styled-components/native';
import HorizontalSlider from '../../components/HorizontalSlider';
import Input from '../../components/Search/Input';
import Vertical from '../../components/Vertical';

const Container = styled.ScrollView`
  background-color: black;
`;

const Text = styled.Text``;
export default ({ movies, shows, onChange, keyword, onSubmit }) => (
  <Container>
    <Input placeholder={'Write a keyword'} onChange={onChange} value={keyword} onSubmit={onSubmit}></Input>
    {movies.length !== 0 && (
      <HorizontalSlider title={'Movie results'}>
        {movies.map((movie) => (
          <Vertical key={movie.id} id={movie.id} poster={movie.poster_path} title={movie.title} votes={movie.vote_average} />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title={'TV results'}>
        {shows.map((show) => (
          <Vertical key={show.id} id={show.id} poster={show.poster_path} title={show.name} votes={show.vote_average} />
        ))}
      </HorizontalSlider>
    )}
  </Container>
);
