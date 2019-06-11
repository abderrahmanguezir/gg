import{ Sujet } from './sujet';
import{ Specialite } from './specialite';

export class Etudiant{
    constructor(
                public id?: number,
                public nom?: string,
                public prenom?: string,
                public email?: string,
                public telephone?: string,
                public cin?: string,
                public adresse?: string,
                public dateNaissance?: Date,
                public codeInscription?: string,
                public sujet?: any,
                public specialite?: any
    ){
  
    }
  }