import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions, ScrollView } from 'react-native/';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';
import ScrollContainer from '../../components/ScorllContainer';
import HorizontalSlider from '../../components/HorizontalSlider';
import List from '../../components/List';
import SwiperSlider from '../../components/SwiperSlider';

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading}>
    <SwiperSlider>
      {nowPlaying.map((movie) => (
        <Slide
          key={movie.id}
          id={movie.id}
          title={movie.original_title}
          overview={movie.overview}
          votes={movie.vote_average}
          backgroundImage={movie.backdrop_path}
          poster={movie.poster_path}
        />
      ))}
    </SwiperSlider>
    <Container>
      <HorizontalSlider title={'Popular Movies'}>
        {popular.map((movie) => (
          <Vertical key={movie.id} id={movie.id} poster={movie.poster_path} title={movie.title} votes={movie.vote_average} />
        ))}
      </HorizontalSlider>

      <List title={'Coming Soon'}>
        {upcoming.map((movie) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            overview={movie.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
