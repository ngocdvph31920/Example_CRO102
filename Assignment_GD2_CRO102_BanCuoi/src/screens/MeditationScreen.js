import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{ uri: 'https://www.youtube.com/watch?v=NW9jsnhSwxA' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webView: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default VideoScreen;
