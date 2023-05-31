const BASEURL = 'http://45.147.99.116:3000';
export const URL_ML = 'http://45.147.99.116:8000/predict';

export const GET_ALL_POTS = `${BASEURL}/pots`;
export const CREATE_POT = `${BASEURL}/pots`;
export const CREATE_CAPTEUR = (id: string) => `${BASEURL}/capteurs/${id}`;
export const GET_ALL_CAPTEUR = (id: string) => `${BASEURL}/capteurs/${id}`;
export const GET_ONE_POT = (id: string) => `${BASEURL}/pots/${id}/capteurs`;
