import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Background from '../components/Background';
import InputCustom from '../components/InputCustom';
import DatePicker from 'react-native-date-picker';
import {Button} from '@rneui/base';
import ButtonDatePickerCustom from '../components/ButtonDatePickerCustom';
import ButtonCustom from '../components/ButtonCustom';
import {createPot} from '../services/PotService';

const CreatePotTemplate = ({navigation}: any) => {
  const [name, setName] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [plant, setPlant] = useState<string | null>(null);
  const [plantError, setPlantError] = useState<string | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  const submit = async () => {
    if (!name) {
      setNameError('Le nom est obligatoire');
    } else {
      setNameError(null);
    }
    if (!plant) {
      setPlantError('La plante est obligatoire');
    } else {
      setPlantError(null);
    }
    if (name && plant && date) {
      createPot({
        nom: name,
        plante: plant,
        datePlantation: date.toISOString(),
      }).then(() => {
        navigation.navigate('Home');
      });
    }
  };
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <InputCustom
            label={'Nom'}
            error={nameError}
            placeholder={'Nom du pot'}
            onChangeText={r => setName(r)}
            value={name}
          />
          <InputCustom
            label={'Plante'}
            error={plantError}
            placeholder={'Rose, Tulipe, ...'}
            onChangeText={r => setPlant(r)}
            value={plant}
          />
          <ButtonDatePickerCustom onPress={() => setOpen(true)} date={date} />
        </View>
        <ButtonCustom style={styles.btnSubmit} onPress={submit} text={'Créer'} />
        <DatePicker
          modal
          open={open}
          date={date}
          locale={'fr'}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: '20%',
    alignItems: 'center',
  },
  inputBox: {
    width: '100%',
    maxWidth: 300,
  },
  btnSubmit: {
    marginTop: 50,
    width: 350,
  },
});

export default CreatePotTemplate;
