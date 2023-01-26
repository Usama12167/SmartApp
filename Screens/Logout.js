import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {logOut} from '../store/slice/AuthSlice';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 10,
          height: 50,
          width: 200,
          borderWidth: 2,
        }}
        onPress={() => {
          dispatch(logOut());
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
