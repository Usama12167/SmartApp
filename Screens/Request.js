import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import {
    
    
    TouchableOpacity,
    
    TextInput,
   
  } from 'react-native';
  

const Foods = () => {
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
        title={'Custom Request'}
        // message={"Message "}
        hintInput={'Enter Text'}
        submitInput={inputText => {
          setInput(inputText), setVisible(false);
        }}
        closeDialog={() => setVisible(false)}></DialogInput>
      <Button title="Send custom request" onPress={() => setVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'Red',
  },
});

export default Foods;
