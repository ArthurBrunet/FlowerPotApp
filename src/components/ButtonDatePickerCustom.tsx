import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
type ButtonDatePickerCustomProps = PropsWithChildren<{
  onPress: () => void;
  date: Date | null;
}>;
const ButtonDatePickerCustom = ({
  onPress,
  date,
}: ButtonDatePickerCustomProps) => {
  let momentDate = moment(date?.toISOString());
  let dateString = momentDate.fromNow();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date de plantation</Text>
      <TouchableOpacity onPress={onPress} style={styles.boxText}>
        <Text style={styles.text}>
          {dateString[0].toUpperCase()}
          {dateString.slice(1)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: '#ececec',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  boxText: {
    backgroundColor: '#5e5e5e',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  text: {
    color: '#ececec',
    fontSize: 19,
  },
});

export default ButtonDatePickerCustom;
