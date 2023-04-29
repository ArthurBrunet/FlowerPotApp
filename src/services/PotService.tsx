import axios from 'axios';
import { CREATE_POT, GET_ALL_POTS, GET_ONE_POT } from "../config/ConfigURL";

export async function getAllPots() {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    let res = await axios.get(GET_ALL_POTS, options);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
}
export async function getOnePot(id: string) {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    let res = await axios.get(GET_ONE_POT(id), options);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
}
export async function createPot(data: {
  nom: string;
  plante: string;
  datePlantation: string;
}) {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    let res = await axios.post(CREATE_POT, data, options);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
}

export function handler(err: any) {
  return err.response;
}
