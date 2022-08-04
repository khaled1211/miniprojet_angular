import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService } from '../shared/file.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css'],
})
export class CsvComponent implements OnInit {
  nom: any;
  click: boolean = false;
  constructor(
    private toastr: ToastrService,
    public fileservice: FileService,
    private http: HttpClient
  ) {}
  ngOnInit() {}
  resetForm() {
    this.fileservice.resetdata(this.nom).subscribe((data) => console.log(data));
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
