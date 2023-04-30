const BASEURL = 'http://192.168.0.124:3000';

export const GET_ALL_POTS = `${BASEURL}/pots`;
export const CREATE_POT = `${BASEURL}/pots`;
export const CREATE_CAPTEUR = (id: string) => `${BASEURL}/capteurs/${id}`;
export const GET_ALL_CAPTEUR = (id: string) => `${BASEURL}/capteurs/${id}`;
export const GET_ONE_POT = (id: string) => `${BASEURL}/pots/${id}/capteurs`;
