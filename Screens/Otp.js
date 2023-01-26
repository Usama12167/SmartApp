// import {
//     View,
//     StyleSheet,
//     TouchableOpacity,
//     Text,
//     TextInput,

//   } from 'react-native';
//   import React, {useState} from 'react';

//   const OTP = () => {
//     const [otp, setOtp] = useState('');

//     return (
//       <View style={styles.container}>
//       <View>
//         <Text style={styles.Text1}>
//           Verify your email
//         </Text>
//       </View>
//       <View>

//         <Text style={styles.Text2}>
//          Please enter the one time-otp sent to
//         </Text>
//       </View>
//       <View>
//         <TextInput style={styles.input}
//                 value={otp}
//                 placeholder='otp code'
//                 onChangeText={text => setOtp(text)}
//                 autoCapitalize={'none'}
//                 underlineColorAndroid={'black'}
//                 keyboardType={'number'}
//         />
//       </View>
//       <View style={styles.Text3}>
//         <Text >Did't recieve the OTP?Wait </Text>
//       </View>
//       <View>
//         <TouchableOpacity style={styles.button}
//          onPress={() => {}}>
//           <Text style={{color:"lightblue"}}>Resend It</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// export default OTP;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   Text1: {
//     marginTop: 10,
//     fontSize: 30, color: 'black'
//   },
//   Text2:{
//     marginTop: 10, fontSize: 15, color: 'black'
//   },
//   input:{
//     marginTop:40,
//   },
//   Text3:{
//     marginTop:150,alignItems:"flex-start"
//   },
//   button:{
//     alignItems:"flex-end",marginRight:10,
//   }
// });
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomButton from 'Button/button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useStyle} from './style';
const OTP = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets//login.png')} />
      </View>
      <View>
        <Text style={styles.text}>Enter 4 Digit Code </Text>
        <Text>Enter 4 digit code you can recieve your email</Text>
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
          <Text>Resend the code</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.custom}>
        <CustomButton onPress={() => {}} title="Verify" />
      </View>
    </View>
  );
};
export default OTP;
import {RootState} from 'app/store/slice';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = () =>
  StyleSheet.create({
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
      color: 'black',
      height: hp(6),
      borderColor: 'black',
      borderWidth: 3,
    },

    underlineStyleHighLighted: {
      borderColor: 'black',
      color: 'black',

      marginVertical: 100,
    },
    btt: {
      alignItems: 'center',
    },
    custom: {
      margin: 150,
      alignItems: 'center',
    },
    text: {
      fontSize: hp(5),
    },
  });
