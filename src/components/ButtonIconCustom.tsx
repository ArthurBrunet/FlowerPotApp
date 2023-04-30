import React, {PropsWithChildren} from 'react';
import {Animated, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Icon} from '@rneui/base';
import {PRIMARY_COLOR, TERTIARY_COLOR} from '../assets/colors';
type ButtonDatePickerCustomProps = PropsWithChildren<{
  onPress: () => void;
  nameIcon: string;
  size: number;
  style?: any;
}>;
const ButtonIconCustom = ({
  onPress,
  nameIcon,
  size,
  style,
}: ButtonDatePickerCustomProps) => {
  const animatedValue = new Animated.Value(0);
  const buttonScale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.05, 1.1],
  });
  const onPressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      bounciness: 15,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 0,
      bounciness: 15,
      useNativeDriver: true,
    }).start();
  };
  const animatedScaleStyle = {
    transform: [{scale: buttonScale}],
  };
  return (
    <TouchableWithoutFeedback
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}>
      <Animated.View style={[styles.container, style, animatedScaleStyle]}>
        <Icon name={nameIcon} color={TERTIARY_COLOR} size={size} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: TERTIARY_COLOR,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default ButtonIconCustom;
