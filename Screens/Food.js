import React from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import diet from '../Image/diet.png';
import Foods from './Request';
import {Card} from 'react-native-elements';
const dietPlan = [
  {
    id: 1,
    name: 'Breakfast',
    description: 'Oatmeal with banana and honey',
  },
  {
    id: 2,
    name: 'Lunch',
    description: 'Whole grain sandwich ',
  },
  {
    id: 3,
    name: 'Dinner',
    description: ' vegetables',
  },
  {
    id: 4,
    name: 'Dinner',
    description: ' vegetables',
  },
];

const Food = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.back} source={diet} />
      <View style={styles.s2}>
        <Text style={styles.text}>BMI:</Text>
      </View>
      <FlatList
        data={dietPlan}
        renderItem={({item}) => (
          <TouchableOpacity style={{}}>
            <Card title={item.name} image={item.image}>
              <Text style={styles.description1}>{item.name}</Text>
              {/* <Image source={item.image} style={styles.image} /> */}
              <Text style={styles.description}>{item.description}</Text>
            </Card>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      {/* <Button title=" custom request" onPress={() => setVisible(true)} /> */}

      <Foods></Foods>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  s2: {
    // backgroundColor: 'red',
    flex: 1,
    width: '100%',
    height: '10%',
    display: 'flex',
    padding: 20,
    borderRadius: 200,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
  },
  description: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',

    color: '#656565',
  },
  description1: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
    // color: 'red'
    backgroundColor: 'green',
  },
  text: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 30,
  },
  back: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 10,
    zIndex: -1,
  },
});

export default Food;
