
// import {
//   ActivityIndicator,
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native'

// //import { actionCreators, initialState, reducer } from './posts'

// export default function Food({navigation}) {
//   return(
// <View >
//   <View>
//   <Text style={{fontSize:30}}>
//     Food plan
//   </Text>
//   </View>
//   <View>
//     <TouchableOpacity  style={styles.button} activeOpacity={0.5}
//             onPress={() => navigation.navigate('Edit')}>
//       <Text >If you want more food click it </Text>
//     </TouchableOpacity>
//   </View>
// </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //backgroundColor:"skyblue",
//     alignItems:"center",
//     justifyContent:"center",
//   },
//   post: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'white',
//     paddingVertical: 20,
//     paddingRight: 20,
//     marginLeft: 20,
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   body: {
//     marginTop: 10,
//     fontSize: 14,
//     color: '#F8F8F8',
//   },
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button:{
//     width: "100%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "skyblue",
  
// },
// })
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import DialogInput from 'react-native-dialog-input';

const Food = () => {
    const [visible, setVisible] = React.useState(false);
    const [input, setInput] = React.useState('');

    return (
        <View style={styles.container}>
            {/* {input ? 
                <Text style={styles.title}>{input}</Text>
                :
                <Text style={styles.title}>App</Text>
            } */} 
            
            <DialogInput 
                isDialogVisible={visible}
                title={"Custom Request"}
                // message={"Message "}
                hintInput ={"Enter Text"}
                submitInput={ (inputText) => {
                    setInput(inputText),
                    setVisible(false);
                }}
                closeDialog={() => setVisible(false)}>
            </DialogInput>
            <Button 
                title='Send custom request'
                onPress={() => setVisible(true)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"skyblue",
    },
    
});

export default Food;
