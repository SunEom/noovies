import { DefaultTheme } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.Text`
  color: rgb(220, 220, 220);
  font-weight: 500;
  margin-bottom: 7px;
  font-size: 12px;
`;

const Votes = ({ votes }) => <Container>⭐ {votes} / 10</Container>;

export default Votes;
