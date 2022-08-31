import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService } from '../shared/file.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css'],
})
export class CsvComponent implements OnInit {
  public allData: String;
  public allData2: any;
  public layout: object;
  public config: object;
  displayedColumns = { id: '1', amount: 100, wallet: 'sarah wallet', fees: 5 };
  mois: boolean = false;
  semaine: boolean = false;
  nom: any;
  nbEntree: any;
  click: boolean = false;
  affichetable: boolean = true;
  spinner: boolean = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    public fileservice: FileService,
    private http: HttpClient
  ) {
    console.log(typeof this.displayedColumns);

    this.layout = {
      title: 'Mort au cours du temps',
      autosize: true,
    };
    this.config = {
      responsive: true,
    };
  }
  ngOnInit() {}
  resetForm() {
    this.spinner = true;

    setTimeout(() => {
      this.fileservice.resetdata(this.nom).subscribe((data) => {
        this.affichetable = false;
        this.spinner = false;
        this.semaine = true;
        (this.allData = data.split(',')),
          this.toastr.success('Prédiction semaines avec success ');
      });
    }, 10000);
  }
  resetForm2() {
    this.spinner = true;
    setTimeout(() => {
      this.fileservice.resetdatamois(this.nom).subscribe((data) => {
        this.affichetable = false;
        this.spinner = false;
        this.mois = true;
        (this.allData = data.split(',')),
          this.toastr.success('Prédiction Mois avec success ');
      });
    }, 10000);
  }

  filePick(e) {
    const file: File = e.target.files[0];
    console.log(file.name);
    this.nom = file.name;
    if (file) {
      const formData = new FormData();

      formData.append('add_collabs_file', file);

      const upload$ = this.http.post(
        environment.apiUrl + '/add-collabs-from-file',
        formData
      );

      upload$.subscribe({
        next: (res) => {
          this.click = true;
          this.toastr.success('upload fichier avec success');
        },
        error: (err) => {
          console.log('rrrrr');
          console.log(err);
        },
      });
    }
  }
}
