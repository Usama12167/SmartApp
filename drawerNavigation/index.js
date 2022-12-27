import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Reset from '../Screens/Reset';
import Home from '../Screens/Home';
import Profile from '../Screens/Updateprofile';
import Login from '../Screens/LoginScreen';
import Food from '../Screens/Food';
import Logout from '../Screens/Logout';
import Edit from '../Screens/Edit';
import DrawerContent from './drawerContent';
import Theme from '../Screens/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconw from 'react-native-vector-icons/Ionicons'
const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      {/* headerStyle: {{
            backgroundColor: '#307ecc', //Set Header color
          }}, */}
      <Drawer.Screen
        name="Home"
        component={Home}
        
        options={{
          headerStyle: {
            backgroundColor: '#47a89a', //Set Header color
          },
          drawerIcon: ({color, size}) => (
            <Icon
               name="home" size={size} color={color}
            />
          ),
        //   drawerIcon : <Icon name="home" size={30} color="#900"/>
        }}

      />
      <Drawer.Screen
        name="Update profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#47a89a',
          },
          drawerIcon: ({color, size}) => (
            <Icons
               name="profile" size={size} color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Food plan"
        component={Food}
        options={{
          headerStyle: {
            backgroundColor: '#47a89a',
          },
          drawerIcon: ({color, size}) => (
            <Iconw
               name="ios-fast-food" size={size} color={color}
            />
          ),
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
            <Icone
               name="lock-reset" size={size} color={color}
            />
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
            <Icons
               name="customerservice" size={size} color={color}
            />
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
            <Icons
               name="logout" size={size} color={color}
            />
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
            <Icone
               name="theme-light-dark" size={size} color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
