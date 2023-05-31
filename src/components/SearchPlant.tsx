import React, {useState} from 'react';
import {Icon, Text} from '@rneui/base';
import {PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR} from '../assets/colors';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {getPredict} from '../services/PerdicService';
import ButtonCustom from './ButtonCustom';

const SearchPlant = ({setPlant = null}: any) => {
  const [plant, setPlantTemp] = useState<string | null>(null);
  const [pourcentage, setPourcentage] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const takePicture = async () => {
    launchCamera({}, async r => {
      try {
        let formdata = new FormData();
        formdata.append('image', {
          uri: r.assets[0].uri,
          type: 'image/jpeg',
          name: 'image.jpg',
        });
        let response = await getPredict(formdata);
        setOpen(true);
        setPlantTemp(response.class_name);
        response.probability = Math.round(response.probability * 100);
        setPourcentage(response.probability);
      } catch (e) {
        console.log(e);
      }
    });
  };
  return (
    <>
      <TouchableOpacity style={styles.cameraBtn} onPress={takePicture}>
        <Icon name={'photo-camera'} size={30} color={TERTIARY_COLOR} />
      </TouchableOpacity>
      {open && plant && pourcentage && (
        <Modal
          transparent={true}
          onRequestClose={() => {
            setOpen(false);
          }}>
          <View style={styles.background}>
            <View style={styles.modal}>
              <Text style={styles.name}>{plant}</Text>
              <Text style={styles.percentage}>{pourcentage}%</Text>
              {setPlant ? (
                <View style={styles.rowBtn}>
                  <ButtonCustom
                    style={styles.btn}
                    onPress={() => {
                      setOpen(false);
                    }}
                    text={'Non'}
                  />
                  <ButtonCustom
                    style={styles.btn}
                    onPress={() => {
                      setPlant(plant);
                      setOpen(false);
                    }}
                    text={'Oui'}
                  />
                </View>
              ) : (
                  <ButtonCustom
                      style={styles.btnOk}
                      onPress={() => {
                        setOpen(false);
                      }}
                      text={'Ok'}
                  />
              )}
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cameraBtn: {
    width: 49,
    height: 49,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: TERTIARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  background: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  modal: {
    backgroundColor: SECONDARY_COLOR,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 125,
    height: 300,
    borderRadius: 5,
    elevation: 5,
  },
  name: {
    color: TERTIARY_COLOR,
    fontSize: 35,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  percentage: {
    color: TERTIARY_COLOR,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  btn: {
    width: 100,
    height: 50,
  },
  btnOk: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
  }
});

export default SearchPlant;
