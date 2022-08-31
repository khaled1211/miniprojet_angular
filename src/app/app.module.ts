import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CsvComponent } from './csv/csv.component';
import { FileService } from './shared/file.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { MatInputModule } from '@angular/material/input';

import {
  MatFormFieldModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';

import { AffichageComponent } from './affichage/affichage.component';
import { AppRoutingModule } from './app-routing.module';
PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [AppComponent, CsvComponent, AffichageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PlotlyModule,
    ToastrModule.forRoot(),
  ],
  providers: [FileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
