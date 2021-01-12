import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { movieApi } from '../API';

export default () => {
  const getData = async () => {
    const [nowPlaying, error] = await movieApi.nowPlaying();
    const [poular, popularError] = await movieApi.nowPlaying();
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text>Movies</Text>
    </View>
  );
};
