import{ Departement } from './departement';
export class Enseignant{
    constructor(public id?: number,
                public nom?: string,
                public prenom?: string,
                public email?: string,
                public telephone?: string,
                public cin?: string,
                public adresse?: string,
                public dateNaissance?: Date,
                public matricule?: string,
                public departement?: any
    ){
  
    }
  }