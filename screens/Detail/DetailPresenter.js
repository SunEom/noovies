import React from 'react';
import { ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { apiImage } from '../../API';
import ScrollContainer from '../../components/ScrollContainer';
import Poster from '../../components/Poster';
import Votes from '../../components/Votes';
import { formatDate } from '../../utils';
import Link from '../../components/Detail/Link';

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get('window').height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  padding: 0px 30px;
  margin-top: 50px;
  padding-bottom: 80px;
`;

const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 10px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ openBrowser, result, loading }) => (
  <ScrollContainer loading={false}>
    <>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, '-') }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            {result.votes ? <Votes votes={result.votes} /> : null}
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview ? (
          <>
            <DataName>Overview</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        ) : null}
        {loading ? <ActivityIndicator style={{ marginTop: 40 }} color="white" size="small" /> : null}
        {result.spoken_languages ? (
          <>
            <DataName>Language</DataName>
            <DataValue>{result.spoken_languages.map((l) => l.name)}</DataValue>
          </>
        ) : null}
        {result.release_date ? (
          <>
            <DataName>Release Date</DataName>
            <DataValue>{formatDate(result.release_date)}</DataValue>
          </>
        ) : null}
        {result.status ? (
          <>
            <DataName>Status</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        ) : null}
        {result.runtime ? (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} minutes</DataValue>
          </>
        ) : null}
        {result.first_air_date ? (
          <>
            <DataName>First Air Date</DataName>
            <DataValue>{formatDate(result.first_air_date)}</DataValue>
          </>
        ) : null}
        {result.genres ? (
          <>
            <DataName>Genres</DataName>
            <DataValue>{result.genres.map((g, index) => (index + 1 === result.genres.length ? g.name : `${g.name}, `))}</DataValue>
          </>
        ) : null}
        {result.number_of_episodes ? (
          <>
            <DataName>Seasons / Episodes</DataName>
            <DataValue>
              {result.number_of_seasons} / {result.number_of_episodes}{' '}
            </DataValue>
          </>
        ) : null}
        {result.imdb_id ? (
          <>
            <DataName>Links</DataName>
            <Link icon={'imdb'} onPress={() => openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)} text={'IMDB Page'}></Link>
          </>
        ) : null}
        {result.videos.results?.length > 0 ? (
          <>
            <DataName>Videos</DataName>
            {result.videos.results.map((video) => (
              <Link
                text={video.name}
                key={video.id}
                icon="youtube-play"
                onPress={() => openBrowser(`https://www.youtube.com/watch?v=${video.key}`)}
              ></Link>
            ))}
          </>
        ) : null}
      </Data>
    </>
  </ScrollContainer>
);
