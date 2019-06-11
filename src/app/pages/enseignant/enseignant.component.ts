import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../entity/enseignant';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Departement } from '../entity/departement';
import { EnseignantService } from './enseignant.service';
import { DepartementService } from '../departement/departement.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {

  enseignants : Enseignant[];
  departements : Departement[];
  departement : Departement;
  departement2 : Departement;
  enseignantForm : FormGroup;
  operation : string = 'add';
  selectedEnseignant : Enseignant;

  constructor(private enseignantService : EnseignantService, private departementService : DepartementService, private fb : FormBuilder) {
      this.createForm();
   }

  ngOnInit() {
    this.initEnseignant();
    this.loadEnseignants();
    this.loadDepartements();
  }

  createForm(){
    this.enseignantForm = this.fb.group({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      cin: '',
      adresse: '',
      dateNaissance: '',
      matricule: '',
      departement: ''
    });
  }

  loadEnseignants(){
    this.enseignantService.getEnseignants().subscribe(
      data => {this.enseignants = data},
      error => {console.log('ERRUER !!!!')},
      () => {console.log('Le chargement des Enseignants est terminé ' )}
      
    );
   
  }

  loadDepartements(){
    this.departementService.getDepartements().subscribe(
      data => {this.departements = data},
      error => {console.log('ERREUR  !!!')},
      () => {console.log('Le chargement des departements est terminé')}
    );
  }

  findDepartementById(id:any):any{
    console.log('departement '+this.selectedEnseignant.departement)
     this.departementService.getDepartementById(id).subscribe(
      data => {this.departement = data},
      error => {console.log('ERREUR !!!')},
      () => {console.log('Le chargement de departement est terminé')}
    );
    return this.departement;
  }

  addEnseignant(){
    const v = this.enseignantForm.value;
    console.log('find by ' + this.findDepartementById(this.selectedEnseignant.departement));
    if(this.findDepartementById(this.selectedEnseignant.departement)!=null){
      v.departement = this.findDepartementById(this.selectedEnseignant.departement);
    }    
    this.enseignantService.addEnseignant(v).subscribe(    
      res => {
        this.initEnseignant();
        this.loadEnseignants();
      }
     
    );
  }

  updateEnseignant(){
    if(this.findDepartementById(this.selectedEnseignant.departement)!=null){
      this.selectedEnseignant.departement = this.findDepartementById(this.selectedEnseignant.departement);
    }  
    this.enseignantService.updateEnseignant(this.selectedEnseignant).subscribe(
      res => {
        this.initEnseignant();
        this.loadEnseignants();
        this.operation="add";
      }
    );
  }

  deleteEnseignant(){
    this.enseignantService.deleteEnseignant(this.selectedEnseignant.id).subscribe(
      res => {
        this.selectedEnseignant = new  Enseignant();
        this.loadEnseignants();
      }
    );
  }

  initEnseignant(){
    this.selectedEnseignant = new Enseignant();
    this.createForm();
  }
}