import React from 'react';
import styled from 'styled-components/native';
import Horizontal from '../../components/Horizontal';
import HorizontalSlider from '../../components/HorizontalSlider';
import List from '../../components/List';
import Slide from '../../components/Movies/Slide';
import ScrollContainer from '../../components/ScorllContainer';
import SwiperSlider from '../../components/SwiperSlider';
import Vertical from '../../components/Vertical';

export default ({ loading, popular, topRated, today, thisWeek }) => (
  <ScrollContainer loading={loading}>
    <SwiperSlider>
      {popular.map((show) => (
        <Slide
          key={show.id}
          id={show.id}
          title={show.name}
          overview={show.overview}
          votes={show.vote_average}
          backgroundImage={show.backdrop_path}
          poster={show.poster_path}
        />
      ))}
    </SwiperSlider>
    <HorizontalSlider title={'Top Rated'}>
      {topRated.map((show) => (
        <Vertical key={show.id} id={show.id} poster={show.poster_path} title={show.name} votes={show.vote_average} />
      ))}
    </HorizontalSlider>
    <HorizontalSlider title={'This Week'}>
      {thisWeek.map((show) => (
        <Vertical key={show.id} id={show.id} poster={show.poster_path} title={show.name} votes={show.vote_average} />
      ))}
    </HorizontalSlider>
    <List title={'Airing Today'}>
      {today.map((show) => (
        <Horizontal key={show.id} id={show.id} poster={show.poster_path} title={show.name} overview={show.overview} />
      ))}
    </List>
  </ScrollContainer>
);
