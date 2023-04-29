import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const Background = ({children}: any) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333232',
  },
});

export default Background;
