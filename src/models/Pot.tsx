import Capteur from './Capteur';
import moment, {Moment} from 'moment';

export default class Pot {
  nom: String;
  plante: String;
  datePlantation: Moment;
  capteurs: Capteur[];

  constructor(
    nom: String,
    plante: String,
    datePlantation: string,
    capteurs: Capteur[],
  ) {
    this.nom = nom;
    this.plante = plante;
    this.datePlantation = moment(datePlantation);
    this.capteurs = capteurs;
  }
}
