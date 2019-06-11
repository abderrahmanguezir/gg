import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';


import { CompteComponent } from '../../pages/compte/compte.component';
import { EtudiantComponent } from '../../pages/etudiant/etudiant.component';
import { DepartementComponent } from '../../pages/departement/departement.component';
import { EnseignantComponent } from '../../pages/enseignant/enseignant.component';
import { ResultatComponent } from '../../pages/resultat/resultat.component';
import { SoutenanceComponent } from '../../pages/soutenance/soutenance.component';
import { SpecialiteComponent } from '../../pages/specialite/specialite.component';
import { SujetComponent } from '../../pages/sujet/sujet.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    CompteComponent,
    EtudiantComponent,
    DepartementComponent,
    EnseignantComponent,
    ResultatComponent,
    SoutenanceComponent,
    SpecialiteComponent,
    SujetComponent
  ]
})

export class AdminLayoutModule {}
