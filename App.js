import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Image, Text } from 'react-native';
import { Asset } from 'expo-asset';

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cacheImages([
      'https://images.unsplash.com/photo-1606851682541-2c947e1ddc9b?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      require('./assets/splash.png'),
    ]);
    console.log(images);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? <Text>Ready?!!</Text> : <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.err} />;
}
