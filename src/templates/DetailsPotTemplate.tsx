import React, {useEffect, useState} from 'react';
import Background from '../components/Background';
import Pot from '../models/Pot';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {
  BACKGROUND_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
} from '../assets/colors';
import moment from 'moment/moment';
import CardCapteur from '../components/CardCapteur';
import ButtonIconCustom from '../components/ButtonIconCustom';
import {getAllCapteur} from '../services/CapteurService';
import ButtonDeletePot from '../components/ButtonDeletePot';

const DetailsPotTemplate = ({route, navigation}: any) => {
  const [pot] = useState<Pot>(route.params.pot);
  const [capteurs, setCapteurs] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getCapteurs();
  }, []);
  const getCapteurs = () => {
    getAllCapteur(pot._id).then(res => {
      setCapteurs(res);
    });
  };
  const onRefresh = () => {
    setRefreshing(true);
    getCapteurs();
    setRefreshing(false);
  };
  let datePlantation = moment(pot.datePlantation);
  return (
    <Background>
      <View style={styles.header}>
        <Text style={styles.title}>{pot.nom}</Text>
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
      </View>
      <FlatList
        style={styles.list}
        data={capteurs}
        renderItem={item => (
          <CardCapteur
            capteur={item.item}
            index={item.index}
            navigation={navigation}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="white"
            titleColor="white"
          />
        }
        ListEmptyComponent={<Text style={styles.empty}>Aucun capteur.</Text>}
      />
      <ButtonIconCustom
        onPress={() => navigation.navigate('CreateCapteur', {pot: pot})}
        nameIcon={'add'}
        size={35}
        style={styles.btnAdd}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: TERTIARY_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  header: {
    overflow: 'hidden',
    paddingBottom: 20,
    backgroundColor: BACKGROUND_COLOR,
    paddingTop: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 1,
  },
  list: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  btnRemove: {
    position: 'absolute',
    top: 60,
    right: 20,
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
  btnAdd: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
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

export default DetailsPotTemplate;
