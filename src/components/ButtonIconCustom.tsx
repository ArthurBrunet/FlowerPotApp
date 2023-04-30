import React, {PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
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
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,style]}>
      <Icon name={nameIcon} color={TERTIARY_COLOR} size={size} />
    </TouchableOpacity>
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
