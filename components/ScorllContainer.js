import React from 'react';
import { ActivityIndicator, Dimensions, RefreshControl, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const HEIGHT = Dimensions.get('screen').height / 2;

const ScrollContainer = ({ loading, children }) => (
  <Container>
    <ScrollView
      refreshControl={<RefreshControl tintColor={'white'} />}
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        justifyContent: loading ? 'center' : 'flex-start',
      }}
    >
      {loading ? <ActivityIndicator style={{ height: HEIGHT }} color="white" size="small" /> : children}
    </ScrollView>
  </Container>
);

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollContainer;
