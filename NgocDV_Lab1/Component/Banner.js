import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Banner = ({ imageUrl }) => (
  <Image source={{ uri: imageUrl }} style={styles.banner} />
);

const styles = StyleSheet.create({
  banner: {
    borderRadius: 10,
    width: '100%',
    height: 200,
  },
});

export default Banner;
