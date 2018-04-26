import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatSort,
  MatSnackBar
} from '@angular/material';

import { Subscription } from 'rxjs/Subscription';
import { RessourceService } from '../ressource.service';
import { Iressource } from '../iressource';

@Component({
  selector: 'app-ressource-list',
  templateUrl: './ressource-list.component.html',
  styleUrls: ['./ressource-list.component.css']
})
export class RessourceListComponent implements OnInit {
  ress: Iressource;
  selectedRowIndex = -1;
  edition = false;

  constructor(private snackBar: MatSnackBar, private ressourceService: RessourceService) {}

  displayedColumns = ['nom_ressource', 'url'];
  dataSourceRessource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceRessource.filter = filterValue;
  }

  ngOnInit() {
    this.ress = {
      id_ressource: null,
      nom_ressource: '',
      url: '',
      savoir_id_savoir: null
    };

    this.refreshTab();

    this.ressourceService.update$.subscribe(() => this.refreshTab());
  }

  refreshTab() {
    this.ressourceService
      .getRessources()
      .subscribe((data: Iressource[]) => {
        this.dataSourceRessource = new MatTableDataSource(data);
        this.dataSourceRessource.sort = this.sort;
      });
  }

  highlight(row) {
    this.selectedRowIndex = row.id_ressource;
    this.ress = Object.assign({}, row);
    this.edition = true;
  }

  cancelSelect() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInput();
  }

  onSubmit() {
    if (this.edition) {
      this.ressourceService
        .updateRessource(this.ress)
        .subscribe(
          result => {this.afficherMessage('Enregistrement effectué', ''); },
          error => {this.afficherMessage('', 'Ressource déjà présente'); }
        );
    } else {
      this.ressourceService
        .addRessource(this.ress)
        .subscribe(
          result => {this.afficherMessage('Enregistrement effectué', ''); },
          error => {this.afficherMessage('', 'Ressource déjà présente'); }
        );
    }
  }

  afficherMessage(message: string, erreur: string) {
    this.snackBar.open(message, erreur, {
      duration: 2000,
    });
  }

  deleteRessource() {
    this.edition = false;
    this.ressourceService
      .deleteRessource(this.ress.id_ressource)
      .subscribe(
        result => {this.afficherMessage('Suppression effectuée', ''); }
      );
    this.clearInput();
  }

  clearInput() {
    this.ress = {
      id_ressource: null,
      nom_ressource: '',
      url: '',
      savoir_id_savoir: null
    };
  }

}
