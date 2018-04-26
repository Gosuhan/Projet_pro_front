import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Isavoir } from '../isavoir';
import { SavoirService } from '../savoir.service';
import { IcategorieSavoir } from '../icategorie-savoir';
import { CategorieSavoirService } from '../categorie-savoir.service';

@Component({
  selector: 'app-savoir-de-categorie-savoir',
  templateUrl: './savoir-de-categorie-savoir.component.html',
  styleUrls: ['./savoir-de-categorie-savoir.component.css']
})
export class SavoirDeCategorieSavoirComponent implements OnInit {
  savoirs: Isavoir[];
  savoir: Isavoir;
  categorieSavoir: IcategorieSavoir;

  constructor(
    private categorieSavoirService: CategorieSavoirService,
    private savoirService: SavoirService,
    public dialogRef: MatDialogRef<SavoirDeCategorieSavoirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.categorieSavoir = {
      id_categorie_savoir: null,
      nom_categorie_savoir: ''
    };
    this.savoirs = [];
    this.categorieSavoirService.getCategorieSavoir(this.data).subscribe(categorieSavoir => this.categorieSavoir = categorieSavoir);
    this.refreshList();
  }

  refreshList() {
    this.savoirService.getSavoirsCategorieSavoir(this.data).subscribe(savoirs => this.savoirs = savoirs);
  }

  closeDial() {
    this.dialogRef.close();
  }

  delSavoirCategorieSavoir(idSavoir, nomSavoir, idCategorieSavoirSavoir) {
    const categorieSavoir: IcategorieSavoir = {
      id_categorie_savoir: this.categorieSavoir.id_categorie_savoir,
      nom_categorie_savoir: this.categorieSavoir.nom_categorie_savoir
    };
    const savoir: Isavoir = {
      id_savoir: idSavoir,
      nom_savoir: nomSavoir,
      categorie_savoir_id_categorie_savoir: idCategorieSavoirSavoir
    };
    this.savoirService.deleteSavoirCategorieSavoir(categorieSavoir, savoir).subscribe(succes => this.refreshList());
  }

  test() {
    if (this.savoirs.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
