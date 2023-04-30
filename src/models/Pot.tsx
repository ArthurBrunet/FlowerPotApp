import Capteur from './Capteur';

export default class Pot {
  _id: string;
  nom: string;
  plante: string;
  datePlantation: string;
  capteurs: Capteur[];

  constructor(
    _id: string,
    nom: string,
    plante: string,
    datePlantation: string,
    capteurs: Capteur[],
  ) {
    this._id = _id;
    this.nom = nom;
    this.plante = plante;
    this.datePlantation = datePlantation;
    this.capteurs = capteurs;
  }
}
