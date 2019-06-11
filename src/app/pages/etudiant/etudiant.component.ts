import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EtudiantService } from './etudiant.service';
import { Etudiant } from '../entity/Etudiant';
import { Sujet } from '../entity/sujet';
import { Specialite } from '../entity/specialite';
import { SujetService } from '../sujet/sujet.service';
import { SpecialiteService } from '../specialite/specialite.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  etudiants : Etudiant[];
  sujets : Sujet[];
  sujet : Sujet;
  specialites : Specialite[];
  specialite : Specialite;
  etudiantForm : FormGroup;
  operation : string = 'add';
  selectedEtudiant : Etudiant;

  constructor(private etudiantService : EtudiantService, private sujetService : SujetService, private specialiteService : SpecialiteService, private fb : FormBuilder) {
      this.createForm();
   }

  ngOnInit() {
    this.initEtudiant();
    this.loadEtudiants();
    this.loadSujets();
    this.loadSpecialites();
  }

  createForm(){
    this.etudiantForm = this.fb.group({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      cin: '',
      adresse: '',
      dateNaissance: '',
      codeInscription: '',
      sujet: '',
      specialite: ''
    });
  }

  loadEtudiants(){
    this.etudiantService.getEtudiants().subscribe(
      data => {this.etudiants = data},
      error => {console.log('ERRUER !!!!')},
      () => {console.log('Le chargement des etudiants est terminé ' )}
      
    );
   
  }

  loadSujets(){
    this.sujetService.getSujets().subscribe(
      data => {this.sujets = data},
      error => {console.log('ERREUR  !!!')},
      () => {console.log('Le chargement des sujets est terminé')}
    );
  }

  loadSpecialites(){
    this.specialiteService.getSpecialites().subscribe(
      data => {this.specialites = data},
      error => {console.log('ERREUR  !!!')},
      () => {console.log('Le chargement des specialites est terminé')}
    );
  }

  findSujetById(id:any):any{
    console.log('sujet '+this.selectedEtudiant.sujet)
     this.sujetService.getSujetById(id).subscribe(
      data => {this.sujet = data},
      error => {console.log('ERREUR !!!')},
      () => {console.log('Le chargement de sujet est terminé')}
    );
    return this.sujet;
  }

  findSpecialiteById(id:any):any{
    console.log('region '+this.selectedEtudiant.specialite)
     this.specialiteService.getSpecialiteById(id).subscribe(
      data => {this.specialite = data},
      error => {console.log('ERREUR !!!')},
      () => {console.log('Le chargement de specialite est terminé')}
    );
    return this.specialite;
  }

  addEtudiant(){
    console.log('Etudiant  '+this.selectedEtudiant.nom)
    const v = this.etudiantForm.value;
    console.log('find by ' + this.findSujetById(this.selectedEtudiant.sujet));
    if(this.findSujetById(this.selectedEtudiant.sujet)!=null && this.findSpecialiteById(this.selectedEtudiant.specialite)!=null){
      v.sujet = this.findSujetById(this.selectedEtudiant.sujet);
      v.specialite = this.findSpecialiteById(this.selectedEtudiant.specialite);
    }    
    this.etudiantService.addEtudiant(v).subscribe(    
      res => {
        this.initEtudiant();
        this.loadEtudiants();
      }
     
    );
  }

  updateEtudiant(){
    if(this.findSujetById(this.selectedEtudiant.sujet)!=null && this.findSpecialiteById(this.selectedEtudiant.specialite)!=null){
      this.selectedEtudiant.sujet = this.findSujetById(this.selectedEtudiant.sujet);
      this.selectedEtudiant.specialite = this.findSpecialiteById(this.selectedEtudiant.specialite);
    }  
    this.etudiantService.updateEtudiant(this.selectedEtudiant).subscribe(
      res => {
        this.initEtudiant();
        this.loadEtudiants();
        this.operation="add";
      }
    );
  }

  deleteEtudiant(){
    this.etudiantService.deleteEtudiant(this.selectedEtudiant.id).subscribe(
      res => {
        this.selectedEtudiant = new  Etudiant();
        this.loadEtudiants();
      }
    );
  }

  initEtudiant(){
    this.selectedEtudiant = new Etudiant();
    this.createForm();
  }
}