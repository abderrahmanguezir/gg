import{ Sujet } from './sujet';
import{ Enseignant } from './enseignant';

export class Soutenance{
    constructor(
                public id?: number,
                public dateSoutenence?: Date,
                public heure?: number,
                public salle?: string,
                public enseignant?: any,
                public sujet?: any,
    ){
  
    }
  }