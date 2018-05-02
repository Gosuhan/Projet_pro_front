import { TypeInscriptionService } from './../type-inscription.service';
import { Iinscription } from './../iinscription';
import { ItypeInscription } from './../itype-inscription';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableDataSource,
  MatSort,
  MatSnackBar
} from '@angular/material';
import { SavoirService } from '../savoir.service';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-type-inscriptiona-inscription',
  templateUrl: './type-inscriptiona-inscription.component.html',
  styleUrls: ['./type-inscriptiona-inscription.component.css']
})
export class TypeInscriptionaInscriptionComponent implements OnInit {
  typeInscription: ItypeInscription;
  typesInscription: ItypeInscription[];
  inscription: Iinscription;
  selectedTypeInscription: boolean;
  selectedRowIndex = -1;

  constructor(
    private snackBar: MatSnackBar,
    private inscriptionService: InscriptionService,
    private typeInscriptionService: TypeInscriptionService,
    public dialogRef: MatDialogRef<TypeInscriptionaInscriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns = [
    'type_inscription'
  ];
  dataSourceTypesInscription = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceTypesInscription.filter = filterValue;
  }

  ngOnInit() {
    this.inscriptionService.getInscription(this.data).subscribe(inscription => this.inscription = inscription);

    this.typeInscriptionService
      .getTypesInscription()
      .subscribe((data: ItypeInscription[]) => {
        this.dataSourceTypesInscription = new MatTableDataSource(data);
        this.dataSourceTypesInscription.sort = this.sort;
      });
  }

  highlight(row) {
    this.selectedRowIndex = row.id_type_inscription;
    this.typeInscription = Object.assign({}, row);
    this.selectedTypeInscription = true;
  }

  closeDial() {
    this.dialogRef.close();
  }

  addTypeInscriptionToInscription() {
    this.selectedTypeInscription = false;
    this.selectedRowIndex = -1;
    const inscription: Iinscription = {
      id_inscription: this.inscription.id_inscription,
      nom_inscription: this.inscription.nom_inscription,
      type_inscription_id_type_inscription: this.inscription.type_inscription_id_type_inscription
    };
    const typeInscription: ItypeInscription = {
      id_type_inscription: this.typeInscription.id_type_inscription,
      type_inscription: this.typeInscription.type_inscription
    };
    this.inscriptionService.addInscriptionTypeInscription(this.typeInscription, this.inscription).subscribe(
      result => {this.afficherMessage('Enregistrement effectué', ''); },
      error => {this.afficherMessage('', 'Type inscription déjà enregistré'); }, // Ne fonctionne pas car
      // ce n'est pas une création mais une modification (donc aucune erreur). A voir
    );
  }

  afficherMessage(message: string, erreur: string) {
    this.snackBar.open(message, erreur, {
      duration: 2000,
    });
  }

  // rechercher(recherche) {
  //   this.typeInscriptionService.searchTypesInscription(recherche).subscribe((data: ItypeInscription[]) => {
  //     this.dataSourceTypesInscription = new MatTableDataSource(data);
  //     this.dataSourceTypesInscription.sort = this.sort;
  //   });
  // }
}
