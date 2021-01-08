import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  const getHeaderName = (route) => getFocusedRouteNameFromRoute(route) || 'Movies';

  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({ title: name });
  }, [route]);

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Tv" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favourites" component={Favs} />
    </Tabs.Navigator>
  );
};
