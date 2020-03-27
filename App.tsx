import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { WebView } from "react-native-webview";
import Products from './components/product/Products';

export default function App() {
  return (
    <View style={styles.Container}>
      <Text>Test</Text>
      <Products/>
      {/* <WebView
        style={ styles.WebViewStyle }
        source={{ uri: 'https://www.youtube.com/watch?v=exn7QTKvuug&t=248s' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}   
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  WebViewStyle: {
    margin: 20
  }
});
