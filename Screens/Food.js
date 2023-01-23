import React from 'react';
//import {Button, StyleSheet, Text, View} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
   
  } from 'react-native';
  

  const Food = () => {
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
export default Food;
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

// const Food = () => {
//   const [visible, setVisible] = React.useState(false);
//   const [input, setInput] = React.useState('');

//   return (
//     <View style={styles.container}>
//       {/* {input ? 
//                 <Text style={styles.title}>{input}</Text>
//                 :
//                 <Text style={styles.title}>App</Text>
//             } */}

//       <DialogInput
//         isDialogVisible={visible}
//         title={'Custom Request'}
//         // message={"Message "}
//         hintInput={'Enter Text'}
//         submitInput={inputText => {
//           setInput(inputText), setVisible(false);
//         }}
//         closeDialog={() => setVisible(false)}></DialogInput>
//       <Button title="Send custom request" onPress={() => setVisible(true)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'skyblue',
//   },
// });

// export default Food;
