import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import themeSlice from '../store/slice/themeSlice';


const Theme = () => {
   const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

 

  const handleChange = () => {
    const next = theme === 'dak' ? 'light' : 'dark';
    // dispatch(set(next));
  };

  return (
    <View>
      <TouchableOpacity onPress={() => {
        console.log('==>');
        dispatch(themeSlice());
        //  dispatch(handleChange());
      }}>
        <Text style={{color:"red",}}>Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Theme;
