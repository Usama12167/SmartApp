import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {logOut} from '../store/slice/AuthSlice';
import {dispatch} from '@reduxjs/toolkit';

const Logout = () => {
  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onLogout();
          console.log('==>');
        }}
        //   console.log('==>');
        //   dispatch(logOut());
        // }}>
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Logout;
