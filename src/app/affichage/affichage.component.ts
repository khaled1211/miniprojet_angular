import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../shared/file.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css'],
})
export class AffichageComponent implements OnInit {
  nom: any;
  expenses: any = [];
  factures: any;
  columns = ['Id', 'Reference', 'Quantite', 'Prix Unitaire'];
  constructor(private router: Router, public fileservice: FileService) {}

  ngOnInit(): void {
    console.log('eee');
    this.fileservice.resetdata(this.nom).subscribe((data) => {
      (this.factures = data), console.log(data);
    });
  }
}
