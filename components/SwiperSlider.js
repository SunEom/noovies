import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';

const { height: HEIGHT } = Dimensions.get('window');

const Container = styled.View`
  margin-top: 10px;
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const SwiperSlider = ({ children }) => (
  <Container>
    <Swiper controlsEnabled={false} loop timeout={3}>
      {children}
    </Swiper>
  </Container>
);

export default SwiperSlider;
