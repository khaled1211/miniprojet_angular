import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffichageComponent } from './affichage/affichage.component';
import { CsvComponent } from './csv/csv.component';

const routes: Routes = [
  { path: '', component: AffichageComponent },
  { path: 'user', component: CsvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
