import React, {useEffect, useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Storage from '../AppManager/Storage';

const LoadingProScreen = () => {
  const navigation = useNavigation();
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const saveState = async () => {
    await Storage.save('onbSkip', 1);
  };

  useEffect(() => {
    let data = null;
    let getData = async () => {
      data = await Storage.get('onbSkip');
      if (data) {
        navigation.navigate('Home');
      } else {
        saveState();
        navigation.replace('OnboardingProMatchScreen');
      }
    };
    getData();
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        position: 'relative',
      }}>
      <Image
        source={require('../assets/images/loaderImage.png')}
        resizeMode="cover"
        style={{
          width: dimensions.width,
          position: 'absolute',
          height: dimensions.height,
          top: 0,
          zIndex: 1,
        }}
      />

      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          height: dimensions.height,
          position: 'absolute',
          zIndex: 2,
          width: dimensions.width,
        }}></View>

      {/*<Image*/}
      {/*  source={require('../assets/images/onbProTextImage.png')}*/}
      {/*  resizeMode="contain"*/}
      {/*  style={{*/}
      {/*    width: dimensions.width * 0.74,*/}
      {/*    zIndex: 3,*/}
      {/*    height: dimensions.height * 0.25,*/}
      {/*  }}*/}
      {/*/>*/}
    </View>
  );
};

export default LoadingProScreen;
