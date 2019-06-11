import { Component, OnInit } from '@angular/core';
import { Sujet } from '../entity/sujet';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SujetService } from './sujet.service';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.scss']
})
export class SujetComponent implements OnInit {

  sujets : Sujet[];
  sujetForm: FormGroup;
  operation: string = 'add';
  selectedSujet :Sujet ;

  constructor(private sujetService : SujetService, private fb : FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initSujet();
    this.loadSujets();
  }

  createForm(){
    this.sujetForm = this.fb.group({
      nom: '',
      description: ''
    });
  }

  loadSujets(){
    this.sujetService.getSujets().subscribe(
      data => {this.sujets = data},
      error => {console.log('ERREUR !!!!!!')},
      () => {console.log('Le chargement des Sujets est terminé' )}
    );
  }

  addSujet(){
    const p = this.sujetForm.value;
    this.sujetService.addSujet(p).subscribe(
      res => {
        this.initSujet();
        this.loadSujets();
      }
    );
  }

  updateSujet(){
    console.log("upd  "+this.selectedSujet.nom);
    this.sujetService.updateSujet(this.selectedSujet).subscribe(
      res => {
        this.initSujet();
        this.loadSujets();
        this.operation="add";
      }
    );
  }

  deleteSujet(){
    this.sujetService.deleteSujet(this.selectedSujet.id).subscribe(
      res => {
        this.selectedSujet = new  Sujet();
        this.loadSujets();
      }
    );
  }

  initSujet(){
    this.selectedSujet = new  Sujet();
    this.createForm();
  }
}

