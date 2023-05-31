import React, {PropsWithChildren} from 'react';
import {Input} from '@rneui/base';
import {StyleSheet} from 'react-native';

type InputCustomProps = PropsWithChildren<{
  label: String | null;
  value: String | null;
  style: any;
  error: String | null;
  placeholder: String | null;
  onChangeText: (text: string) => void;
}>;
const InputCustom = ({
  label,
  value = null,
  error = null,
  style = null,
  placeholder,
  onChangeText,
}: InputCustomProps) => {
  return (
    <Input
      label={label}
      labelStyle={styles.labelStyle}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      errorMessage={error}
      style={styles.input}
      inputContainerStyle={styles.inputContainerStyle}
      containerStyle={style}
      inputStyle={styles.inputStyle}
      errorStyle={styles.errorStyle}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#5e5e5e',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  labelStyle: {
    color: '#ececec',
    marginBottom: 5,
  },
  inputStyle: {
    color: '#ececec',
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  errorStyle: {},
});
export default InputCustom;
