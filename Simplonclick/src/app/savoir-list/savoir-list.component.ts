import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatSort,
  MatSnackBar
} from '@angular/material';

import { Subscription } from 'rxjs/Subscription';
import { Isavoir } from '../isavoir';
import { SavoirService } from '../savoir.service';
import { RessourceAuSavoirComponent } from '../ressource-au-savoir/ressource-au-savoir.component';
import { RessourceDuSavoirComponent } from '../ressource-du-savoir/ressource-du-savoir.component';
import { MembreDeSavoirComponent } from '../membre-de-savoir/membre-de-savoir.component';

@Component({
  selector: 'app-savoir-list',
  templateUrl: './savoir-list.component.html',
  styleUrls: ['./savoir-list.component.css']
})
export class SavoirListComponent implements OnInit {
  sav: Isavoir;
  selectedRowIndex = -1;
  edition = false;
  demandes = false;

  constructor(private snackBar: MatSnackBar, private savoirService: SavoirService, public dialog: MatDialog) {}

  displayedColumns = ['nom_savoir'];
  dataSourceSavoir = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceSavoir.filter = filterValue;
  }

  ngOnInit() {
    this.sav = {
      id_savoir: null,
      nom_savoir: '',
      categorie_savoir_id_categorie_savoir: null
    };

    this.refreshTab();

    this.savoirService.update$.subscribe(() => this.refreshTab());
  }

  refreshTab() {
    this.savoirService
      .getSavoirs()
      .subscribe((data: Isavoir[]) => {
        this.dataSourceSavoir = new MatTableDataSource(data);
        this.dataSourceSavoir.sort = this.sort;
      });
  }

  highlight(row) {
    this.selectedRowIndex = row.id_savoir;
    this.sav = Object.assign({}, row);
    this.edition = true;
  }

  cancelSelect() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInput();
  }

  onSubmit() {
    if (this.edition) {
      this.savoirService
        .updateSavoir(this.sav)
        .subscribe();
    } else {
      this.savoirService
        .addSavoir(this.sav)
        .subscribe(
          result => {this.afficherMessage('Enregistrement effectué', ''); },
          error => {this.afficherMessage('', 'Savoir déjà présent'); }
        );
    }
  }

  afficherMessage(message: string, erreur: string) {
    this.snackBar.open(message, erreur, {
      duration: 2000,
    });
  }

  deleteSavoir() {
    this.edition = false;
    this.savoirService
      .deleteSavoir(this.sav.id_savoir)
      .subscribe(
        result => {this.afficherMessage('Suppression effectuée', ''); }
      );
    this.clearInput();
  }

  clearInput() {
    this.sav = {
      id_savoir: null,
      nom_savoir: '',
      categorie_savoir_id_categorie_savoir: null
    };
  }

  ajouterRessourceAuSavoir() {
    this.dialog.open(RessourceAuSavoirComponent, {
      width: '600px',
      data: this.sav.id_savoir
    });
  }

  ressourcesDuSavoir() {
    this.dialog.open(RessourceDuSavoirComponent, {
      width: '600px',
      data: this.sav.id_savoir
    });
  }

  membresDeSavoir() {
    this.dialog.open(MembreDeSavoirComponent, {
      width: '1200px',
      data: this.sav.id_savoir
    });
  }

}
