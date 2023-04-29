import ValueCapteur from './ValueCapteur';

export default class Capteur {
  id: string;
  type: string;
  valeurs: ValueCapteur[];

  constructor(id: string, type: string, valeurs: ValueCapteur[]) {
    this.id = id;
    this.type = type;
    this.valeurs = valeurs;
  }
}
