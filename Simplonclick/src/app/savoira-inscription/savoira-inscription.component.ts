import { SavoirService } from './../savoir.service';
import { Iinscription } from './../iinscription';
import { Isavoir } from './../isavoir';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableDataSource,
  MatSort,
  MatSnackBar
} from '@angular/material';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-savoira-inscription',
  templateUrl: './savoira-inscription.component.html',
  styleUrls: ['./savoira-inscription.component.css']
})
export class SavoiraInscriptionComponent implements OnInit {
  savoir: Isavoir;
  savoirs: Isavoir[];
  inscription: Iinscription;
  selectedSavoir: boolean;
  selectedRowIndex = -1;

  constructor(
    private snackBar: MatSnackBar,
    private inscriptionService: InscriptionService,
    private savoirService: SavoirService,
    public dialogRef: MatDialogRef<SavoiraInscriptionComponent>,
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
    this.inscriptionService.getInscription(this.data).subscribe(inscription => this.inscription = inscription);

    this.savoirService
      .getSavoirs()
      .subscribe((data: Isavoir[]) => {
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

  addSavoirToInscription() {
    this.selectedSavoir = false;
    this.selectedRowIndex = -1;
    const inscription: Iinscription = {
      id_inscription: this.inscription.id_inscription,
      nom_inscription: this.inscription.nom_inscription,
      type_inscription_id_type_inscription: this.inscription.type_inscription_id_type_inscription
    };
    const savoir: Isavoir = {
      id_savoir: this.savoir.id_savoir,
      nom_savoir: this.savoir.nom_savoir,
      categorie_savoir_id_categorie_savoir: this.savoir.categorie_savoir_id_categorie_savoir
    };
    this.inscriptionService.addInscriptionSavoir(this.savoir, this.inscription).subscribe(
      result => {this.afficherMessage('Enregistrement effectué', ''); },
      error => {this.afficherMessage('', 'Savoir déjà enregistré'); }, // Ne fonctionne pas car
      // ce n'est pas une création mais une modification (donc aucune erreur). A voir
    );
  }

  afficherMessage(message: string, erreur: string) {
    this.snackBar.open(message, erreur, {
      duration: 2000,
    });
  }

  // rechercher(recherche) {
  //   this.savoirService.searchSavoirs(recherche).subscribe((data: Isavoir[]) => {
  //     this.dataSourceSavoirs = new MatTableDataSource(data);
  //     this.dataSourceSavoirs.sort = this.sort;
  //   });
  // }
}
