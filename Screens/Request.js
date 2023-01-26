import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import {TouchableOpacity, TextInput} from 'react-native';

const Foods = () => {
  const [visible, setVisible] = React.useState(false);
  const [input, setInput] = React.useState('');

  return (
    <View style={styles.container}>
      <DialogInput
        isDialogVisible={visible}
        title={'Custom Request'}
        //message={'Message '}
        hintInput={'Enter Text'}
        dialogStyle={{bordertopcolor: 'red'}}
        // modalStyle={{backgroundColor: 'red'}}
        submitInput={inputText => {
          setInput(inputText), setVisible(false);
        }}
        closeDialog={() => setVisible(false)}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="white"
          secureTextEntry={true}
        />
      </DialogInput>
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
  TextInput: {
    height: 20,
    width: 300,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#818181',
    backgroundColor: '#F5F5F5',
  },
});

export default Foods;
