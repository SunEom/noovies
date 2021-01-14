import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native/';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';
import ScrollContainer from '../../components/ScorllContainer';

const { height: HEIGHT } = Dimensions.get('window');

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading}>
    <SliderContainer>
      <Swiper controlsEnabled={false} loop timeout={3}>
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
      </Swiper>
    </SliderContainer>
    <Container>
      <Title title={'Popular Movies'} />
      <ScrollView
        style={{ marginTop: 20, marginBottom: 40 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20 }}
      >
        {popular.map((movie) => (
          <Vertical key={movie.id} id={movie.id} poster={movie.poster_path} title={movie.title} votes={movie.vote_average} />
        ))}
      </ScrollView>
      <Title title={'Coming Soon'} />
      <UpcomingContainer>
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
      </UpcomingContainer>
    </Container>
  </ScrollContainer>
);
