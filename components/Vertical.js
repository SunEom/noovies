import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import Votes from './Votes';
import { ProgressViewIOSComponent, TouchableOpacity } from 'react-native';
import { trimText } from '../utils';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({ id, poster, title, votes, overview, backgroundImage, isTv = false }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate('Detail', {
      id,
      title,
      poster,
      votes,
      overview,
      backgroundImage,
      isTv,
    });
  };

  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

Vertical.proptypes = {
  id: PropTypes.number.isRequired,
  post: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  isTv: PropTypes.bool,
};

export default Vertical;
