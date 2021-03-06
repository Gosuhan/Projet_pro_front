import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatSort,
  MatSnackBar
} from '@angular/material';

import { Subscription } from 'rxjs/Subscription';
import { Imembre } from '../imembre';
import { MembreService } from '../membre.service';

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit {
  memb: Imembre;
  selectedRowIndex = -1;
  edition = false;
  details = false;
  edit = false;
  objectif = false;

  constructor(private snackBar: MatSnackBar, private membreService: MembreService) {}

  displayedColumns = [/*'pseudo',*/ 'nom', 'prenom'/*, 'email', 'pseudo_slack', 'image', 'fonction'/*, 'niveau_general',
  'disponibilite_habituelle'*/, 'disponibilite_actuelle'/*, 'admin'*/];
  dataSourceMembre = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceMembre.filter = filterValue;
  }

  ngOnInit() {
    this.memb = {
      id_membre: null,
      pseudo: '',
      password: '',
      nom: '',
      prenom: '',
      admin: false,
      email: '',
      pseudo_slack: '',
      image: '',
      fonction: '',
      niveau_general: '',
      disponibilite_habituelle: '',
      disponibilite_actuelle: false,
      inscriptions: [],
      types_inscription: [],
      savoirs: [],
      niveaux_savoir: []
    };

    this.refreshTab();

    this.membreService.update$.subscribe(() => this.refreshTab());
  }

  refreshTab() {
    this.membreService
      .getMembres()
      .subscribe((data: Imembre[]) => {
        this.dataSourceMembre = new MatTableDataSource(data);
        this.dataSourceMembre.sort = this.sort;
      });
  }

  highlight(row) {
    this.selectedRowIndex = row.id_membre;
    this.memb = Object.assign({}, row);
    this.edition = true;
  }

  cancelSelect() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInput();
  }

  onSubmit() {
    if (this.edition) {
      this.membreService
        .updateMembre(this.memb)
        .subscribe(
          result => {this.afficherMessage('Enregistrement effectué', ''); },
          error => {this.afficherMessage('', 'Membre déjà existant / Adresse mail invalide'); }
        );
    } else {
      this.membreService
        .addMembre(this.memb)
        .subscribe(
          result => {this.afficherMessage('Enregistrement effectué', ''); },
          error => {this.afficherMessage('', 'Membre déjà existant / Adresse mail invalide'); }
        );
    }
  }

  afficherMessage(message: string, erreur: string) {
    this.snackBar.open(message, erreur, {
      duration: 2000,
    });
  }

  deleteMembre() {
    this.edition = false;
    this.membreService
      .deleteMembre(this.memb.id_membre)
      .subscribe(
        result => {this.afficherMessage('Suppression effectuée', ''); }
      );
    this.clearInput();
  }

  clearInput() {
    this.memb = {
      id_membre: null,
      pseudo: '',
      password: '',
      nom: '',
      prenom: '',
      admin: false,
      email: '',
      pseudo_slack: '',
      image: '',
      fonction: '',
      niveau_general: '',
      disponibilite_habituelle: '',
      disponibilite_actuelle: false
    };
  }

}
