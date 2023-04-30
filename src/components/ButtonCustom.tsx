import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '@rneui/base';

const ButtonCustom = ({style, onPress, text}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#494949',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ececec',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ececec',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ButtonCustom;
