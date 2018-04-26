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
import { SavoiraCategorieSavoirComponent } from '../savoira-categorie-savoir/savoira-categorie-savoir.component';
import { SavoirDeCategorieSavoirComponent } from '../savoir-de-categorie-savoir/savoir-de-categorie-savoir.component';
import { IcategorieSavoir } from '../icategorie-savoir';
import { CategorieSavoirService } from '../categorie-savoir.service';

@Component({
  selector: 'app-categorie-savoir-list',
  templateUrl: './categorie-savoir-list.component.html',
  styleUrls: ['./categorie-savoir-list.component.css']
})
export class CategorieSavoirListComponent implements OnInit {
  catsav: IcategorieSavoir;
  selectedRowIndex = -1;
  edition = false;

  constructor(private snackBar: MatSnackBar, private categorieSavoirService: CategorieSavoirService, public dialog: MatDialog) {}

  displayedColumns = ['nom_categorie_savoir'];
  dataSourceCategorieSavoir = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceCategorieSavoir.filter = filterValue;
  }

  ngOnInit() {
    this.catsav = {
      id_categorie_savoir: null,
      nom_categorie_savoir: '',
    };

    this.refreshTab();

    this.categorieSavoirService.update$.subscribe(() => this.refreshTab());
  }

  refreshTab() {
    this.categorieSavoirService
      .getCategoriesSavoir()
      .subscribe((data: IcategorieSavoir[]) => {
        this.dataSourceCategorieSavoir = new MatTableDataSource(data);
        this.dataSourceCategorieSavoir.sort = this.sort;
      });
  }

  highlight(row) {
    this.selectedRowIndex = row.id_categorie_savoir;
    this.catsav = Object.assign({}, row);
    this.edition = true;
  }

  cancelSelect() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInput();
  }

  onSubmit() {
    if (this.edition) {
      this.categorieSavoirService
        .updateCategorieSavoir(this.catsav)
        .subscribe();
    } else {
      this.categorieSavoirService
        .addCategorieSavoir(this.catsav)
        .subscribe(
          result => {this.afficherMessage('Enregistrement effectué', ''); },
          error => {this.afficherMessage('', 'Catégorie déjà existante'); }
        );
    }
  }

  afficherMessage(message: string, erreur: string) {
    this.snackBar.open(message, erreur, {
      duration: 2000,
    });
  }

  deleteCategorieSavoir() {
    this.edition = false;
    this.categorieSavoirService
      .deleteCategorieSavoir(this.catsav.id_categorie_savoir)
      .subscribe(
        result => {this.afficherMessage('Suppression effectuée', ''); }
      );
    this.clearInput();
  }

  clearInput() {
    this.catsav = {
      id_categorie_savoir: null,
      nom_categorie_savoir: '',
    };
  }

  ajouterSavoiraCategorieSavoir() {
    this.dialog.open(SavoiraCategorieSavoirComponent, {
      width: '600px',
      data: this.catsav.id_categorie_savoir
    });
  }

  savoirsDeCategorieSavoir() {
    this.dialog.open(SavoirDeCategorieSavoirComponent, {
      width: '600px',
      data: this.catsav.id_categorie_savoir
    });
  }

}
