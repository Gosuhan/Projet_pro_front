import { NiveauSavoirService } from './../niveau-savoir.service';
import { Iinscription } from './../iinscription';
import { IniveauSavoir } from './../iniveau-savoir';
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
  selector: 'app-niveau-savoira-inscription',
  templateUrl: './niveau-savoira-inscription.component.html',
  styleUrls: ['./niveau-savoira-inscription.component.css']
})
export class NiveauSavoiraInscriptionComponent implements OnInit {
  niveauSavoir: IniveauSavoir;
  niveauxSavoir: IniveauSavoir[];
  inscription: Iinscription;
  selectedNiveauSavoir: boolean;
  selectedRowIndex = -1;

  constructor(
    private snackBar: MatSnackBar,
    private inscriptionService: InscriptionService,
    private niveauSavoirService: NiveauSavoirService,
    public dialogRef: MatDialogRef<NiveauSavoiraInscriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns = [
    'niveau_savoir'
  ];
  dataSourceNiveauxSavoir = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceNiveauxSavoir.filter = filterValue;
  }

  ngOnInit() {
    this.inscriptionService.getInscription(this.data).subscribe(inscription => this.inscription = inscription);

    this.niveauSavoirService
      .getNiveauxSavoir()
      .subscribe((data: IniveauSavoir[]) => {
        this.dataSourceNiveauxSavoir = new MatTableDataSource(data);
        this.dataSourceNiveauxSavoir.sort = this.sort;
      });
  }

  highlight(row) {
    this.selectedRowIndex = row.id_niveau_savoir;
    this.niveauSavoir = Object.assign({}, row);
    this.selectedNiveauSavoir = true;
  }

  closeDial() {
    this.dialogRef.close();
  }

  addNiveauSavoirToInscription() {
    this.selectedNiveauSavoir = false;
    this.selectedRowIndex = -1;
    const inscription: Iinscription = {
      id_inscription: this.inscription.id_inscription,
      nom_inscription: this.inscription.nom_inscription,
      type_inscription_id_type_inscription: this.inscription.type_inscription_id_type_inscription
    };
    const niveauSavoir: IniveauSavoir = {
      id_niveau_savoir: this.niveauSavoir.id_niveau_savoir,
      niveau_savoir: this.niveauSavoir.niveau_savoir,
    };
    this.inscriptionService.addInscriptionNiveauSavoir(this.niveauSavoir, this.inscription).subscribe(
      result => {this.afficherMessage('Enregistrement effectué', ''); },
      error => {this.afficherMessage('', 'NiveauSavoir déjà enregistré'); }, // Ne fonctionne pas car
      // ce n'est pas une création mais une modification (donc aucune erreur). A voir
    );
  }

  afficherMessage(message: string, erreur: string) {
    this.snackBar.open(message, erreur, {
      duration: 2000,
    });
  }

}

