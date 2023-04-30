import React, {useEffect} from 'react';
import {getAllPots} from '../services/PotService';
import Pot from '../models/Pot';
import Background from '../components/Background';
import ButtonIconCustom from '../components/ButtonIconCustom';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import CardPot from '../components/CardPot';
import {PRIMARY_COLOR, TERTIARY_COLOR} from '../assets/colors';
import {Text} from '@rneui/base';

const HomeTemplates = ({navigation}: any) => {
  const [pots, setPots] = React.useState<Pot[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);
  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getAllPots().then((res: Pot[]) => {
      setPots(res);
      setRefreshing(false);
    });
  };
  return (
    <Background>
      <FlatList
        data={pots}
        renderItem={item => (
          <CardPot pot={item.item} index={item.index} navigation={navigation} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="white"
            titleColor="white"
          />
        }
        ListEmptyComponent={
          <Text style={styles.empty}>Aucun pots de fleurs.</Text>
        }
      />
      <ButtonIconCustom
        onPress={() => navigation.navigate('Create')}
        nameIcon={'add'}
        style={{position: 'absolute', bottom: 20, right: 20}}
        size={35}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  empty: {
    color: TERTIARY_COLOR,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginTop: 80,
    flex: 1,
  },
});

export default HomeTemplates;
