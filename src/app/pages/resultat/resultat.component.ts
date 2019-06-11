import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Resultat } from '../entity/resultat';
import { Soutenance } from '../entity/soutenance';
import { ResultatService } from './resultat.service';
import { SoutenanceService } from '../soutenance/soutenance.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {

  resultats : Resultat[];
  soutenances : Soutenance[];
  soutenance : Soutenance;
  resultatForm : FormGroup;
  operation : string = 'add';
  selectedResultat : Resultat;

  constructor(private resultatService : ResultatService, private soutenanceService : SoutenanceService, private fb : FormBuilder) {
      this.createForm();
   }

  ngOnInit() {
    this.initResultat();
    this.loadResultats();
    this.loadSoutenances();
  }

  createForm(){
    this.resultatForm = this.fb.group({
      note: '',
      qualite: '',
      soutenance: ''
    });
  }

  loadResultats(){
    this.resultatService.getResultats().subscribe(
      data => {this.resultats = data},
      error => {console.log('ERRUER !!!!')},
      () => {console.log('Le chargement des resultats est terminé ' )}
      
    );
   
  }

  loadSoutenances(){
    this.soutenanceService.getSoutenances().subscribe(
      data => {this.resultats = data},
      error => {console.log('ERREUR  !!!')},
      () => {console.log('Le chargement des soutenances est terminé')}
    );
  }

  findSoutenanceById(id:any):any{
    console.log('Soutenance '+this.selectedResultat.soutenance)
     this.soutenanceService.getSoutenanceById(id).subscribe(
      data => {this.soutenance = data},
      error => {console.log('ERREUR !!!')},
      () => {console.log('Le chargement de Soutenance est terminé')}
    );
    return this.soutenance;
  }

  addResultat(){
    const v = this.resultatForm.value;
    console.log('find by ' + this.findSoutenanceById(this.selectedResultat.soutenance));
    if(this.findSoutenanceById(this.selectedResultat.soutenance)!=null){
      v.soutenance = this.findSoutenanceById(this.selectedResultat.soutenance);
    }    
    this.resultatService.addResultat(v).subscribe(    
      res => {
        this.initResultat();
        this.loadResultats();
      }
     
    );
  }

  updateResultat(){
    if(this.findSoutenanceById(this.selectedResultat.soutenance)!=null){
      this.selectedResultat.soutenance = this.findSoutenanceById(this.selectedResultat.soutenance);
    }  
    this.resultatService.updateResultat(this.selectedResultat).subscribe(
      res => {
        this.initResultat();
        this.loadResultats();
        this.operation="add";
      }
    );
  }

  deleteResultat(){
    this.resultatService.deleteResultat(this.selectedResultat.id).subscribe(
      res => {
        this.selectedResultat = new  Resultat();
        this.loadResultats();
      }
    );
  }

  initResultat(){
    this.selectedResultat = new Resultat();
    this.createForm();
  }
}