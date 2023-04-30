import React, {useEffect, useState} from 'react';
import Background from '../components/Background';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Capteur from '../models/Capteur';
import {PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR} from '../assets/colors';
import moment from 'moment';

const DetailsPotTemplate = ({route}: any) => {
  const [capteur] = useState<Capteur>(route.params.capteur);
  const [last24hours, setLast24hours] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    initData();
  }, []);
  const initData = () => {
    let last24hoursTemp = capteur.valeurs.filter(capteur =>
      moment(capteur.date).isAfter(moment().subtract(24, 'hours')),
    );
    setLast24hours(last24hoursTemp);
    last24hoursTemp = last24hoursTemp.sort((a, b) => {
      return a.valeur - b.valeur;
    });
    last24hoursTemp = last24hoursTemp.filter(
      (item, index) =>
        index === 0 ||
        index === 1 ||
        index === last24hoursTemp.length - 1 ||
        index === last24hoursTemp.length - 2,
    );
    last24hoursTemp.push(
      capteur.valeurs[capteur.valeurs.length - 1] ||
        capteur.valeurs[capteur.valeurs.length - 2],
    );
    setData(last24hoursTemp);
  };
  return (
    <Background>
      <ScrollView style={styles.container}>
        <Text style={styles.title} numberOfLines={1}>
          {capteur.type}
        </Text>

        <Text style={styles.value} numberOfLines={1}>
          {capteur.valeurs[capteur.valeurs.length - 1].valeur.toFixed(1)}
        </Text>
        {data.length !== 0 && (
          <LineChart
            data={{
              labels:
                data.length !== 0
                  ? data.map(item => moment(item.date).format('HH:mm'))
                  : [],
              datasets: [
                {
                  data: data.length !== 0 ? data.map(item => item.valeur) : [],
                },
              ],
            }}
            width={Dimensions.get('window').width * 0.9} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: PRIMARY_COLOR,
              backgroundGradientFrom: PRIMARY_COLOR,
              backgroundGradientTo: PRIMARY_COLOR,
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '3',
                strokeWidth: '2',
                stroke: TERTIARY_COLOR,
              },
            }}
            bezier
            style={styles.chart}
          />
        )}
        <Text style={styles.stats} numberOfLines={1}>
          Moyenne des valeurs de la journée
        </Text>
        <Text style={styles.valueStats} numberOfLines={1}>
          {last24hours.length !== 0
            ? (
                last24hours.reduce((a, b) => a + b.valeur, 0) /
                last24hours.length
              ).toFixed(1)
            : 0}
        </Text>

        <Text style={styles.stats} numberOfLines={1}>
          Minimum des valeurs de la journée
        </Text>
        <Text style={styles.valueStats} numberOfLines={1}>
          {last24hours.length !== 0 ? last24hours[0].valeur.toFixed(1) : 0}
        </Text>
        <Text style={styles.stats} numberOfLines={1}>
          Maximum des valeurs de la journée
        </Text>
        <Text style={styles.valueStats} numberOfLines={1}>
          {last24hours.length !== 0
            ? last24hours[last24hours.length - 1].valeur.toFixed(1)
            : 0}
        </Text>
        <Text style={styles.stats} numberOfLines={1}>
          Date de la dernière mise à jour
        </Text>
        <Text style={styles.valueStats} numberOfLines={1}>
          {moment(capteur.valeurs[capteur.valeurs.length - 1].date).format(
            'DD/MM/YYYY HH:mm',
          )}
        </Text>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  title: {
    color: TERTIARY_COLOR,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 30,
    marginTop: 80,
  },
  value: {
    color: TERTIARY_COLOR,
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    alignSelf: 'center',
  },
  stats: {
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 10,
    marginLeft: Dimensions.get('window').width * 0.05,
    textAlignVertical: 'center',
  },
  valueStats: {
    color: TERTIARY_COLOR,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    marginLeft: Dimensions.get('window').width * 0.05,
    marginTop: 5,
    textAlignVertical: 'center',
  },
});

export default DetailsPotTemplate;
