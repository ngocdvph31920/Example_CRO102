import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Block = ({ title, children, backgroundColor }) => (
  <View style={[styles.blockContainer, { backgroundColor }]}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.content}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  blockContainer: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
  },
});

export default Block;
