import React, {PropsWithChildren, useEffect, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text = Animated.Text;
import Pot from '../models/Pot';
import moment from 'moment';
import {Card} from '@rneui/base';
import {CardDivider} from '@rneui/base/dist/Card/Card.Divider';
import {PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR} from '../assets/colors';
import Capteur from '../models/Capteur';
type CardCapteurProps = PropsWithChildren<{
  capteur: Capteur;
  index: any;
  navigation: any;
}>;
const CardCapteur = ({capteur, index, navigation}: CardCapteurProps) => {
  const [lastCapteur] = useState(capteur.valeurs[capteur.valeurs.length - 1]);
  return (
    <View style={styles.container} key={index}>
      <Card containerStyle={styles.containerCard}>
        <Text style={styles.title} numberOfLines={1}>
          {capteur.type}
        </Text>
        <CardDivider />
        <Text style={styles.value}>{lastCapteur.valeur}</Text>
        <Text style={styles.date}>
          Mise à jour {moment(lastCapteur.date).fromNow()}
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 1,
  },
  containerCard: {
    margin: 0,
    maxWidth: 350,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: PRIMARY_COLOR,
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
  value: {
    color: TERTIARY_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  },
  date: {
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 12,
  },
});

export default CardCapteur;
