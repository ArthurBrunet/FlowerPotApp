import axios from 'axios';
import {CREATE_CAPTEUR, GET_ALL_CAPTEUR} from '../config/ConfigURL';
export async function getAllCapteur(id: string) {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    let res = await axios.get(GET_ALL_CAPTEUR(id), options);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
}
export async function createCapteur(
  idPot: string,
  data: {
    typeCapteur: string;
    valeur: string;
    dateCapteur: string;
  },
) {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    let res = await axios.post(CREATE_CAPTEUR(idPot), data, options);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
}

export function handler(err: any) {
  return err.response;
}
