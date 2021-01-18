import React from 'react';
import { ActivityIndicator, Dimensions, RefreshControl, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { useState } from 'react/cjs/react.development';

const Container = styled.View`
  flex: 1;
`;

const HEIGHT = Dimensions.get('screen').height / 2;

const ScrollContainer = ({ refreshFn, loading, children }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <Container>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={'white'} />}
        style={{ backgroundColor: 'black' }}
        contentContainerStyle={{
          justifyContent: loading ? 'center' : 'flex-start',
        }}
      >
        {loading ? <ActivityIndicator style={{ height: HEIGHT }} color="white" size="small" /> : children}
      </ScrollView>
    </Container>
  );
};

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollContainer;

const onRefresh = async () => {
  setRefreshing(true);
  await getData();
  setRefreshing(false);
};
