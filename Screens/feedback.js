import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import DialogInput from 'react-native-dialog-input';

function FeedbackScreen() {
  const [feedback, setFeedback] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [input, setInput] = React.useState('');
  const handleSubmit = () => {
    console.log(feedback);
    setFeedback('');
  };

  return (
    <View style={styles.container}>
      <DialogInput
        isDialogVisible={visible}
        title={'Custom Request'}
        hintInput={'Enter Text'}
        // multiline={true}
        numberOfLines={4}
        style={{
          borderWidth: 1,
          borderColor: 'red',
          borderWidth: 5,
          margin: 10,
        }}
        submitInput={inputText => {
          setInput(inputText), setVisible(false);
        }}
        closeDialog={() => setVisible(false)}></DialogInput>
      <Button title="Send custom request" onPress={() => setVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'Red',
  },
});

export default FeedbackScreen;
