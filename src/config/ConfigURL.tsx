const BASEURL = 'http://localhost:3000';

export const GET_ALL_POTS = `${BASEURL}/pots`;
export const CREATE_POT = `${BASEURL}/pots`;
export const GET_ONE_POT = (id: string) => `${BASEURL}/pots/${id}/capteurs`;
