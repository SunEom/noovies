import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View``;

const Card = styled.View``;

const Poster = styled.Image``;

export default ({ results }) => {
  return (
    <View>
      <Text>{results.length}</Text>
    </View>
  );
};
