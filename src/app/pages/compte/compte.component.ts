import { Component, OnInit } from '@angular/core';
import { Compte } from '../entity/compte';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompteService } from './compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  comptes : Compte[];
  compteForm: FormGroup;
  operation: string = 'add';
  selectedCompte :Compte ;

  constructor(private compteService : CompteService, private fb : FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initCompte();
    this.loadComptes();
  }

  createForm(){
    this.compteForm = this.fb.group({
      password: '',
      type: ''
    });
  }

  loadComptes(){
    this.compteService.getComptes().subscribe(
      data => {this.comptes = data},
      error => {console.log('ERREUR !!!!!!')},
      () => {console.log('Le chargement des Comptes est terminé' )}
    );
  }

  addCompte(){
    const p = this.compteForm.value;
    this.compteService.addCompte(p).subscribe(
      res => {
        this.initCompte();
        this.loadComptes();
      }
    );
  }

  updateCompte(){
    console.log("upd  "+this.selectedCompte.type);
    this.compteService.updateCompte(this.selectedCompte).subscribe(
      res => {
        this.initCompte();
        this.loadComptes();
        this.operation="add";
      }
    );
  }

  deleteCompte(){
    this.compteService.deleteCompte(this.selectedCompte.id).subscribe(
      res => {
        this.selectedCompte = new  Compte();
        this.loadComptes();
      }
    );
  }

  initCompte(){
    this.selectedCompte = new  Compte();
    this.createForm();
  }
}