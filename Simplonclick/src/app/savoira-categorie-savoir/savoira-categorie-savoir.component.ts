import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableDataSource,
  MatSort,
  MatSnackBar
} from '@angular/material';
import { Iressource } from '../iressource';
import { Isavoir } from '../isavoir';
import { SavoirService } from '../savoir.service';
import { RessourceService } from '../ressource.service';
import { IcategorieSavoir } from '../icategorie-savoir';
import { CategorieSavoirService } from '../categorie-savoir.service';

@Component({
  selector: 'app-savoira-categorie-savoir',
  templateUrl: './savoira-categorie-savoir.component.html',
  styleUrls: ['./savoira-categorie-savoir.component.css']
})
export class SavoiraCategorieSavoirComponent implements OnInit {
  savoir: Isavoir;
  savoirs: Isavoir[];
  categorieSavoir: IcategorieSavoir;
  selectedSavoir: boolean;
  selectedRowIndex = -1;

  constructor(
    private snackBar: MatSnackBar,
    private categorieSavoirService: CategorieSavoirService,
    private savoirService: SavoirService,
    public dialogRef: MatDialogRef<SavoiraCategorieSavoirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns = [
    'nom_savoir'
  ];
  dataSourceSavoirs = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceSavoirs.filter = filterValue;
  }

  ngOnInit() {
    this.categorieSavoirService.getCategorieSavoir(this.data).subscribe(categorieSavoir => this.categorieSavoir = categorieSavoir);

    this.savoirService.getSavoirs().subscribe((data: Isavoir[]) => {
      this.dataSourceSavoirs = new MatTableDataSource(data);
      this.dataSourceSavoirs.sort = this.sort;
    });
  }

  highlight(row) {
    this.selectedRowIndex = row.id_savoir;
    this.savoir = Object.assign({}, row);
    this.selectedSavoir = true;
  }

  closeDial() {
    this.dialogRef.close();
  }

  addSavoirToCategorieSavoir() {
    this.selectedSavoir = false;
    this.selectedRowIndex = -1;
    const categoriSavoir: IcategorieSavoir = {
      id_categorie_savoir: this.categorieSavoir.id_categorie_savoir,
      nom_categorie_savoir: this.categorieSavoir.nom_categorie_savoir
    };
    const savoir: Isavoir = {
      id_savoir: this.savoir.id_savoir,
      nom_savoir: this.savoir.nom_savoir,
      categorie_savoir_id_categorie_savoir: this.categorieSavoir.id_categorie_savoir // ???
    };
    this.savoirService.addSavoirCategorieSavoir(this.categorieSavoir, this.savoir).subscribe(
      result => {this.afficherMessage('Enregistrement effectué', ''); },
      error => {this.afficherMessage('', 'Savoir déjà présent dans cette catégorie'); }, // Ne fonctionne pas car
      // ce n'est pas une création mais une modification (donc aucune erreur). A voir
    );
  }

  afficherMessage(message: string, erreur: string) {
    this.snackBar.open(message, erreur, {
      duration: 2000,
    });
  }

//   rechercher(recherche) {
//     this.savoirService.searchSavoirs(recherche).subscribe((data: Isavoir[]) => {
//       this.dataSourceSavoirs = new MatTableDataSource(data);
//       this.dataSourceSavoirs.sort = this.sort;
//     });
//   }
}
