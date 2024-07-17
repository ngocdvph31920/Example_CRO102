import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder }) => (
  <TextInput placeholder={placeholder} style={styles.input} />
);

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

export default CustomTextInput;
