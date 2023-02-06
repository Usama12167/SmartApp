import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import background from '../Image/background.png';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const OTP = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.back}
        source={background}></ImageBackground>
      <View>
        <Text style={styles.text}>Enter 4 Digit Code </Text>
        <Text style={{color: 'white', marginRight: 70}}>
          Enter 4 digit code you can recieve your email
        </Text>
      </View>
      <OTPInputView
        style={{width: '90%', height: 200}}
        code={''}
        pinCount={4}
        keyboardType={'default'}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
      <View style={styles.btt}>
        <TouchableOpacity>
          <Text style={{color: 'white'}}>Resend the code</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OTP;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },

  borderStyleHighLighted: {
    borderColor: 'black',
  },

  underlineStyleBase: {
    marginVertical: 100,
    width: wp(10),
    //color: 'black',
    height: hp(6),
    borderColor: 'white',
    borderWidth: 3,
  },
  button: {
    backgroundColor: 'white',
    padding: hp(2),
    height: hp(7),
    width: wp(87),
    borderWidth: wp(0.22),

    borderRadius: 30,
    marginTop: 150,
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',

    fontWeight: 'bold',
  },

  underlineStyleHighLighted: {
    color: 'black',
    marginVertical: 100,
  },
  btt: {
    marginTop: 40,

    alignItems: 'center',
  },
  custom: {
    margin: 150,
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
    fontSize: hp(5),
    color: 'white',
  },
  back: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 10,
  },
});
console.log(wp(10));
