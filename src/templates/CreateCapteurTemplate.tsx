import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Background from '../components/Background';
import InputCustom from '../components/InputCustom';
import DatePicker from 'react-native-date-picker';
import ButtonDatePickerCustom from '../components/ButtonDatePickerCustom';
import ButtonCustom from '../components/ButtonCustom';
import Pot from '../models/Pot';
import {createCapteur} from '../services/CapteurService';

const CreateCapteurTemplate = ({route, navigation}: any) => {
  const [pot] = useState<Pot>(route.params.pot);
  const [type, setType] = useState<string | null>(null);
  const [typeError, setTypeError] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const [valueError, setValueError] = useState<string | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  const submit = async () => {
    if (!type) {
      setTypeError('Le type est obligatoire');
    } else {
      setTypeError(null);
    }
    if (!value) {
      setValueError('La valeur est obligatoire');
    } else {
      setValueError(null);
    }
    if (type && value && date) {
      createCapteur(pot._id, {
        typeCapteur: type,
        valeur: value,
        dateCapteur: date.toISOString(),
      }).then(() => {
        navigation.navigate('Details', {pot: pot});
      });
    }
  };
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <InputCustom
            label={'Type de capteur'}
            error={typeError}
            placeholder={'Nom du capteur'}
            onChangeText={r => setType(r)}
            value={type}
          />
          <InputCustom
            label={'Valeur'}
            error={valueError}
            placeholder={'Valeur du capteur'}
            onChangeText={r => setValue(r)}
            value={value}
          />
        </View>
        <ButtonCustom
          style={styles.btnSubmit}
          onPress={submit}
          text={'Créer'}
        />
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

export default CreateCapteurTemplate;
