import React from 'react';
import { Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import background from '../Image/background.png'

const MyAvatar = () => {
  return (
    
    <Avatar.Image size={70} source={background} ></Avatar.Image>
  );
};

export default MyAvatar;