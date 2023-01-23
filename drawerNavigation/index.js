import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
// import DrawerContent from '@react-navigation/drawer';
import Reset from '../Screens/Reset';
import Home from '../Screens/Home';
import Profile from '../Screens/Updateprofile';
import Login from '../Screens/LoginScreen';
import Food from '../Screens/Food';
import Logout from '../Screens/Logout';
import Edit from '../Screens/Edit';

import Theme from '../Screens/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconw from 'react-native-vector-icons/Ionicons';
import MyAvatar from '../Screens/avater';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import bmi from '../Image/bmi.png';
const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Avatar.Image size={200} source={bmi} />
      </View>
      <TouchableOpacity
        style={{flexDirection: 'row', padding: 15}}
        onPress={() => {
          {
            navigation.navigate('Home');
          }
        }}>
        <Icon name="home" size={24} color={'red'} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'row', padding: 15}}
        onPress={() => {
          {
            navigation.navigate('Profile');
          }
        }}>
        <Icons name="profile" size={24} color={'red'} />
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'row', padding: 15}}
        onPress={() => {
          {
            navigation.navigate('Food');
          }
        }}>
        <Iconw name="ios-fast-food" size={24} color={'red'} />
        <Text>Food plan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'row', padding: 15}}
        onPress={() => {
          {
            navigation.navigate('Reset Password');
          }
        }}>
        <Icone name="lock-reset" size={24} color={'red'} />
        <Text>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'row', padding: 15}}
        onPress={() => {
          {
            navigation.navigate('Logout');
          }
        }}>
        <Icons name="logout" size={24} color={'red'} />
        <Text>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'row', padding: 15}}
        onPress={() => {
          {
            navigation.navigate('Theme');
          }
        }}>
        <Icone name="theme-light-dark" size={24} color={'red'} />
        <Text>Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={CustomDrawer}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            // backgroundColor: '#47a89a',
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            // backgroundColor: '#47a89a',
          },
        }}
      />
      <Drawer.Screen
        name="Food plan"
        component={Food}
        options={{
          headerStyle: {
            // backgroundColor: '#47a89a',
          },
        }}
      />
      <Drawer.Screen
        name="Reset Password"
        component={Reset}
        options={{
          headerStyle: {
            // backgroundColor: '#47a89a',
          },
        }}
      />
      <Drawer.Screen name="Logout" component={Logout} />
      <Drawer.Screen
        name="Theme"
        component={Theme}
        options={{
          headerStyle: {
            // backgroundColor: '#47a89a',
          },
        }}
      />
      {/* <Drawer.Screen
        name="Food plan"
        component={Food}
        options={{
          headerStyle: {
            backgroundColor: '#47a89a',
          },
          // drawerIcon: ({color, size}) => (
          //   <Iconw name="ios-fast-food" size={size} color={color} />
          // ),
        }}
      />
      <Drawer.Screen
        name="Reset Password"
        component={Reset}
        options={{
          headerStyle: {
            backgroundColor: '#47a89a',
          },
          drawerIcon: ({color, size}) => (
            <Icone name="lock-reset" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Custom Request"
        component={Edit}
        options={{
          headerStyle: {
            backgroundColor: '#47a89a',
          },
          drawerIcon: ({color, size}) => (
            <Icons name="customerservice" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          headerStyle: {
            backgroundColor: '#47a89a',
          },
          drawerIcon: ({color, size}) => (
            <Icons name="logout" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Theme"
        component={Theme}
        options={{
          headerStyle: {
            backgroundColor: '#47a89a',
          },
          drawerIcon: ({color, size}) => (
            <Icone name="theme-light-dark" size={size} color={color} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}
