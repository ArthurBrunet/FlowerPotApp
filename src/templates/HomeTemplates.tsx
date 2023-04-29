import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {getAllPots} from '../services/PotService';
import Pot from '../models/Pot';
import Background from '../components/Background';
import CardPot from '../components/CardPot';

const HomeTemplates = ({navigation}: any) => {
  const [pots, setPots] = React.useState<Pot[]>([]);
  useEffect(() => {
    getAllPots().then((res: Pot[]) => {
      setPots(res);
    });
  }, []);
  return (
    <Background>
      <SafeAreaView>
        {/*<FlatList
          data={pots}
          renderItem={(item: Pot) => <CardPot pot={item} />}
        />*/}
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Text>Go to Create</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
};

export default HomeTemplates;
