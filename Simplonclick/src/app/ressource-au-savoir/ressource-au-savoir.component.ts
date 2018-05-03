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

@Component({
  selector: 'app-ressource-au-savoir',
  templateUrl: './ressource-au-savoir.component.html',
  styleUrls: ['./ressource-au-savoir.component.css']
})
export class RessourceAuSavoirComponent implements OnInit {
  ressource: Iressource;
  ressources: Iressource[];
  savoir: Isavoir;
  selectedRessource: boolean;
  selectedRowIndex = -1;

  constructor(
    private snackBar: MatSnackBar,
    private savoirService: SavoirService,
    private ressourceService: RessourceService,
    public dialogRef: MatDialogRef<RessourceAuSavoirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns = [
    'nom_ressource',
    'url'
  ];
  dataSourceRessources = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceRessources.filter = filterValue;
  }

  ngOnInit() {
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);

    this.ressourceService.getRessources().subscribe((data: Iressource[]) => {
      this.dataSourceRessources = new MatTableDataSource(data);
      this.dataSourceRessources.sort = this.sort;
    });
  }

  highlight(row) {
    this.selectedRowIndex = row.id_ressource;
    this.ressource = Object.assign({}, row);
    this.selectedRessource = true;
  }

  closeDial() {
    this.dialogRef.close();
  }

  addRessourceToSavoir() {
    this.selectedRessource = false;
    this.selectedRowIndex = -1;
    const savoir: Isavoir = {
      id_savoir: this.savoir.id_savoir,
      nom_savoir: this.savoir.nom_savoir,
      categorie_savoir_id_categorie_savoir: this.savoir.categorie_savoir_id_categorie_savoir
    };
    const ressource: Iressource = {
      id_ressource: this.ressource.id_ressource,
      nom_ressource: this.ressource.nom_ressource,
      url: this.ressource.url,
      savoir_id_savoir: this.savoir.id_savoir // ???
    };
    this.ressourceService.addRessourceSavoir(this.savoir, this.ressource).subscribe(
      result => {this.afficherMessage('Enregistrement effectué', ''); },
      error => {this.afficherMessage('', 'Ressource déjà présente dans ce savoir'); }, // Ne fonctionne pas car
      // ce n'est pas une création mais une modification (donc aucune erreur). A voir
    );
  }

  afficherMessage(message: string, erreur: string) {
    this.snackBar.open(message, erreur, {
      duration: 2000,
    });
  }

  // rechercher(recherche) {
  //   this.ressourceService.searchRessources(recherche).subscribe((data: Iressource[]) => {
  //     this.dataSourceRessources = new MatTableDataSource(data);
  //     this.dataSourceRessources.sort = this.sort;
  //   });
  // }
}
