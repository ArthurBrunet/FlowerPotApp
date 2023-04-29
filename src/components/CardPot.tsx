import React, {PropsWithChildren} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import Text = Animated.Text;
import Pot from '../models/Pot';
type CardPotProps = PropsWithChildren<{
  pot: Pot;
}>;
const CardPot = ({pot}: CardPotProps) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>{pot.nom}</Text>
        <Text>{pot.plante}</Text>
        <Text>{pot.datePlantation.toNow()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardPot;
