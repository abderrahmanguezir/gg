import { Component, OnInit } from '@angular/core';
import { Departement } from '../entity/departement';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DepartementService } from './departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {

  departements : Departement[];
  departementForm: FormGroup;
  operation: string = 'add';
  selectedDepartement :Departement ;

  constructor(private departementService : DepartementService, private fb : FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initDepartement();
    this.loadDepartements();
  }

  createForm(){
    this.departementForm = this.fb.group({
      nom: '',
      telephone: ''
    });
  }

  loadDepartements(){
    this.departementService.getDepartements().subscribe(
      data => {this.departements = data},
      error => {console.log('ERREUR !!!!!!')},
      () => {console.log('Le chargement des departements est terminé' )}
    );
  }

  addDepartement(){
    const p = this.departementForm.value;
    this.departementService.addDepartement(p).subscribe(
      res => {
        this.initDepartement();
        this.loadDepartements();
      }
    );
  }

  updateDepartement(){
    console.log("upd  "+this.selectedDepartement.nom);
    this.departementService.updateDepartement(this.selectedDepartement).subscribe(
      res => {
        this.initDepartement();
        this.loadDepartements();
        this.operation="add";
      }
    );
  }

  deleteDepartement(){
    this.departementService.deleteDepartement(this.selectedDepartement.id).subscribe(
      res => {
        this.selectedDepartement = new  Departement();
        this.loadDepartements();
      }
    );
  }

  initDepartement(){
    this.selectedDepartement = new  Departement();
    this.createForm();
  }
}