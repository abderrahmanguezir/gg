import { Component, OnInit } from '@angular/core';
import { Soutenance } from '../entity/soutenance';
import { Enseignant } from '../entity/enseignant';
import { Sujet } from '../entity/sujet';
import { Resultat } from '../entity/resultat';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SoutenanceService } from './soutenance.service';
import { EnseignantService } from '../enseignant/enseignant.service';
import { SujetService } from '../sujet/sujet.service';
import { ResultatService } from '../resultat/resultat.service';

@Component({
  selector: 'app-soutenance',
  templateUrl: './soutenance.component.html',
  styleUrls: ['./soutenance.component.scss']
})
export class SoutenanceComponent implements OnInit {

  soutenances: Soutenance[];
  enseignants: Enseignant[];
  enseignant: Enseignant;
  sujets: Sujet[];
  sujet: Sujet;
  soutenanceForm: FormGroup;
  operation: string = 'add';
  selectedSoutenance: Soutenance;

  constructor(private soutenanceService: SoutenanceService, private enseignantService: EnseignantService, private sujetService: SujetService, private resultatService: ResultatService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initSoutenance();
    this.loadSoutenances();
    this.loadEnseignants();
    this.loadSujets();
  }

  createForm() {
    this.soutenanceForm = this.fb.group({
      dateSoutenence: '',
      heure: '',
      salle: '',
      enseignant: '',
      sujet: ''
    });
  }

  loadSoutenances() {
    this.soutenanceService.getSoutenances().subscribe(
      data => { this.soutenances = data },
      error => { console.log('ERREUR !!!') },
      () => { console.log('Le chargement des soutenances est terminé ') }
    );
  }

  loadEnseignants() {
    this.enseignantService.getEnseignants().subscribe(
      data => { this.enseignants = data },
      error => { console.log('ERREUR !!!') },
      () => { console.log('Le chargement des enseignant est terminé ') }

    );
  }

  loadSujets() {
    this.sujetService.getSujets().subscribe(
      data => { this.sujets = data },
      error => { console.log('ERREUR !!!') },
      () => { console.log('Le chargement des sujets est terminé ') }

    );
  }

  findSujetById(id: any): any {
    console.log('sujet ' + this.selectedSoutenance.sujet)
    this.sujetService.getSujetById(id).subscribe(
      data => { this.sujet = data },
      error => { console.log('ERREUR !!!') },
      () => { console.log('Le chargement des sujets est terminé') }
    );
    return this.sujet;
  }

  findEnseignantById(id: any): any {
    console.log('Enseignant ' + this.selectedSoutenance.enseignant)
    this.enseignantService.getEnseignantById(id).subscribe(
      data => { this.enseignant = data },
      error => { console.log('ERREUR !!!') },
      () => { console.log('Le chargement des Enseignants est terminé') }
    );
    return this.enseignant;
  }

  addSoutenance() {
    console.log('Sujet ' + this.selectedSoutenance.sujet)
    console.log('Enseignant ' + this.selectedSoutenance.enseignant)
    const s = this.soutenanceForm.value;
    if (this.findEnseignantById(this.selectedSoutenance.enseignant) != null) {
      s.enseignant = this.findEnseignantById(this.selectedSoutenance.enseignant);
    }
    if (this.findSujetById(this.selectedSoutenance.sujet) != null) {
      s.sujet = this.findSujetById(this.selectedSoutenance.sujet);
    }
    this.soutenanceService.addSoutenance(s).subscribe(
      res => {
        this.initSoutenance();
        this.loadSoutenances();
      }

    );
  }

  updateSoutenance() {
    if (this.findSujetById(this.selectedSoutenance.sujet) != null) {
      this.selectedSoutenance.sujet = this.findSujetById(this.selectedSoutenance.sujet);
    }
    if (this.findEnseignantById(this.selectedSoutenance.enseignant) != null) {
      this.selectedSoutenance.enseignant = this.findEnseignantById(this.selectedSoutenance.enseignant);
    }
    this.soutenanceService.updateSoutenance(this.selectedSoutenance).subscribe(
      res => {
        this.initSoutenance();
        this.loadSoutenances();
        this.operation = "add";
      }
    );
  }

  deleteSoutenance() {
    this.soutenanceService.deleteSoutenance(this.selectedSoutenance.id).subscribe(
      res => {
        this.selectedSoutenance = new Soutenance();
        this.loadSoutenances();
      }
    );
  }

  initSoutenance() {
    this.selectedSoutenance = new Soutenance();
    this.createForm();
  }
}