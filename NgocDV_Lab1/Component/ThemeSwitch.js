import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ThemeSwitch = ({ onPress }) => (
  <TouchableOpacity style={styles.themeSwitch} onPress={onPress}>
    <Text style={styles.themeSwitchText}>Switch Theme</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  themeSwitch: {
    position: 'absolute',
    top: 2,
    right: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },
  themeSwitchText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ThemeSwitch;
