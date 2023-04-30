import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {BACKGROUND_COLOR} from '../assets/colors';

const Background = ({children}: any) => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Background;
