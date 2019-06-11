import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Specialite } from '../entity/specialite';
import { SpecialiteService } from './specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {

  specialites : Specialite[];
  specialiteForm: FormGroup;
  operation: string = 'add';
  selectedSpecialite :Specialite ;

  constructor(private specialiteService : SpecialiteService, private fb : FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initSpecialite();
    this.loadSpecialites();
  }

  createForm(){
    this.specialiteForm = this.fb.group({
      nom: ''
    });
  }

  loadSpecialites(){
    this.specialiteService.getSpecialites().subscribe(
      data => {this.specialites = data},
      error => {console.log('ERREUR !!!!!!')},
      () => {console.log('Le chargement des Comptes est terminé' )}
    );
  }

  addSpecialite(){
    const p = this.specialiteForm.value;
    this.specialiteService.addSpecialite(p).subscribe(
      res => {
        this.initSpecialite();
        this.loadSpecialites();
      }
    );
  }

  updateSpecialite(){
    console.log("upd  "+this.selectedSpecialite.nom);
    this.specialiteService.updateSpecialite(this.selectedSpecialite).subscribe(
      res => {
        this.initSpecialite();
        this.loadSpecialites();
        this.operation="add";
      }
    );
  }

  deleteSpecialite(){
    this.specialiteService.deleteSpecialite(this.selectedSpecialite.id).subscribe(
      res => {
        this.selectedSpecialite = new  Specialite();
        this.loadSpecialites();
      }
    );
  }

  initSpecialite(){
    this.selectedSpecialite = new  Specialite();
    this.createForm();
  }
}