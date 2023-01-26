import React from 'react';
import {useState} from 'react';
import {Card} from 'react-native-paper';
import background from '../Image/background.png';
import bmi from '../Image/bmi.png';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FeedbackScreen from './feedback';
const Home = ({navigation}) => {
  return (
    <ScrollView>
      <Card>
        {/* <Card>
        <Card.Cover source={background} />
      </Card> */}
        {/* <TouchableOpacity style={styles.card}
       onPress={() => {
        
      }}
      > */}
        <Card
          style={styles.card}
          onPress={() => {
            console.log('hhh');
            navigation.navigate('Food plan');
          }}>
          <Card.Cover source={background}></Card.Cover>
          <Card.Title title="Diet plan" />
        </Card>
        {/* </TouchableOpacity> */}
        <TouchableOpacity style={styles.card}>
          <Card onPress={() => navigation.navigate('Food plan')}>
            <Card.Cover source={bmi}></Card.Cover>
            <Card.Title title="Bmi " />
          </Card>
        </TouchableOpacity>
      </Card>
      <View>
        <FeedbackScreen></FeedbackScreen>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Feedback')}>
          <Text style={styles.buttonText}>Feedback</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginTop: 20,
  },

  button: {
    marginTop: 50,
    backgroundColor: 'skyblue',
    padding: 2,
    height: 50,
    width: '100%',
    borderWidth: 1,
    // borderRadius: hp(44),

    alignItems: 'center',
    // color: isDark ? 'teal' : 'black',
  },
  buttonText: {
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
