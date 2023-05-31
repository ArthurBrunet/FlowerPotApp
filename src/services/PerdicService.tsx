import axios from 'axios';
import {URL_ML} from '../config/ConfigURL';
import {handler} from './CapteurService';

export async function getPredict(data: any) {
  try {
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
    };
    let res = await axios.post(URL_ML, data, options);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
}
