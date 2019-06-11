import { Routes } from '@angular/router';

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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'compte',           component: CompteComponent },
    { path: 'etudiant',           component: EtudiantComponent },
    { path: 'departement',           component: DepartementComponent },
    { path: 'enseignant',           component: EnseignantComponent },
    { path: 'resultat',           component: ResultatComponent },
    { path: 'soutenance',           component: SoutenanceComponent },
    { path: 'sujet',           component: SujetComponent },
    { path: 'specialite',           component: SpecialiteComponent }
];
