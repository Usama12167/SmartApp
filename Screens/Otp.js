import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    StatusBar,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  import background from '../Image/background.png';
  const OTP = ({navigation}) => {
    const [otp, setOtp] = useState('');
    
    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.Text1}>
          Verify your email
        </Text>
      </View>
      <View>
      
        <Text style={styles.Text2}>
         Please enter the one time-otp sent to
        </Text>
      </View>
      <View>
        <TextInput style={styles.input}
                value={otp}
                placeholder='otp code'
                onChangeText={text => setOtp(text)}
                autoCapitalize={'none'}
                underlineColorAndroid={'black'}
                keyboardType={'number'}
        />
      </View>
      <View style={styles.Text3}>
        <Text >Did't recieve the OTP?Wait </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button}
         onPress={() => {}}>
          <Text style={{color:"lightblue"}}>Resend It</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default OTP;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text1: {
    marginTop: 10, 
    fontSize: 30, color: 'black'
  },
  Text2:{
    marginTop: 10, fontSize: 15, color: 'black'
  },
  input:{
    marginTop:40,
  },
  Text3:{
    marginTop:150,alignItems:"flex-start"
  },
  button:{
    alignItems:"flex-end",marginRight:10,
  }
});
  //     <View style={styles.container}>
  //       <Image style={styles.back} source={background} />
        
  //     </View>
  //   );
  // };
  // export default OTP;
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     backgroundColor: 'white',
  //   },
  //   container1: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     width: '100%',
  //     height: '100%',
  //   },
  //   text: {
  //     alignItems: 'center',
  //     marginTop: 50,
  //     justifyContent: 'center',
  //     color: 'white',
  //   },
  //   form: {
  //     width: 300,
  //     borderRadius: 250,
  //     height: 50,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     marginTop: 40,
  
  //     //  backgroundColor: "skyblue",
  //   },
  //   form1: {
  //     width: 300,
  //     borderRadius: 250,
  //     height: 50,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     marginTop: 40,
  //     backgroundColor: 'white',
  //   },
  //   back: {
  //     width: '100%',
  //     height: '100%',
  //     position: 'absolute',
  //     top: 10,
  //     zIndex: -1,
  //   },
  // });
  