import React, {PropsWithChildren} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Text = Animated.Text;
import Pot from '../models/Pot';
import moment from 'moment';
import {Card} from '@rneui/base';
import {CardDivider} from '@rneui/base/dist/Card/Card.Divider';
import {PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR} from '../assets/colors';
type CardPotProps = PropsWithChildren<{
  pot: Pot;
  index: any;
  navigation: any;
}>;
const CardPot = ({pot, index, navigation}: CardPotProps) => {
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
  let datePlantation = moment(pot.datePlantation);
  let marginTop = index === 0 ? 80 : 40;
  return (
    <TouchableWithoutFeedback
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={() => navigation.navigate('Details', {pot})}
      key={index}>
      <Animated.View
        style={[animatedScaleStyle, styles.container, {marginTop}]}>
        <Card containerStyle={styles.containerCard}>
          <Text style={styles.title} numberOfLines={1}>
            {pot.nom}
          </Text>
          <CardDivider />
          <View style={styles.row}>
            <Text style={styles.label}>La plante : </Text>
            <Text style={styles.value}>{pot.plante}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date de plantation : </Text>
            <Text style={styles.value}>
              {datePlantation.format('DD/MM/YYYY')}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Nombre de capteurs : </Text>
            <Text style={styles.value}>{pot.capteurs.length}</Text>
          </View>
        </Card>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: 40,
    borderRadius: 10,
  },
  containerCard: {
    margin: 0,
    maxWidth: 350,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: PRIMARY_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    color: TERTIARY_COLOR,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  label: {
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
    fontSize: 15,
  },
  value: {
    color: TERTIARY_COLOR,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CardPot;
