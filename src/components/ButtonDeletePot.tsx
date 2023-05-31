import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from '@rneui/base';
import {PRIMARY_COLOR, TERTIARY_COLOR} from '../assets/colors';
import {deletePot} from '../services/PotService';

const ButtonDeletePot = ({id, navigation}) => {
  const animatedValue = new Animated.Value(0);

  const buttonScale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.05, 1.1],
  });

  const submit = () => {
    Alert.alert(
      'Supprimer le pot',
      'Êtes-vous sûr de vouloir supprimer ce pot ?',
      [
        {
          text: 'Annuler',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'Supprimer',
          onPress: () =>
            deletePot(id)
              .then(res => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Home'}],
                });
              })
              .catch(err => {
                console.log(err);
              }),
        },
      ],
      {cancelable: true},
    );
  };

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
      onPress={submit}>
      <Animated.View style={[styles.btnRemove, animatedScaleStyle]}>
        <Icon name="delete" size={20} color={TERTIARY_COLOR} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  btnRemove: {
    width: 35,
    height: 35,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: TERTIARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default ButtonDeletePot;
