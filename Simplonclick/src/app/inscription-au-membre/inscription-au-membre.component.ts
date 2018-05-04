import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableDataSource,
  MatSort,
  MatSnackBar
} from '@angular/material';
import { Iinscription } from '../iinscription';
import { Imembre } from '../imembre';
import { MembreService } from '../membre.service';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-inscription-au-membre',
  templateUrl: './inscription-au-membre.component.html',
  styleUrls: ['./inscription-au-membre.component.css']
})
export class InscriptionAuMembreComponent implements OnInit {
  inscription: Iinscription;
  inscriptions: Iinscription[];
  membre: Imembre;
  selectedInscription: boolean;
  selectedRowIndex = -1;

  constructor(
    private snackBar: MatSnackBar,
    private membreService: MembreService,
    private inscriptionService: InscriptionService,
    public dialogRef: MatDialogRef<InscriptionAuMembreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns = [
    'id_inscription',
    'nom_inscription'
  ];
  dataSourceInscriptions = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceInscriptions.filter = filterValue;
  }

  ngOnInit() {
    this.membreService.getMembre(this.data).subscribe(membre => this.membre = membre);
  }

  highlight(row) {
    this.selectedRowIndex = row.id_inscription;
    this.inscription = Object.assign({}, row);
    this.selectedInscription = true;
  }

  closeDial() {
    this.dialogRef.close();
  }

  addInscriptionToMembre() {
    this.selectedInscription = false;
    this.selectedRowIndex = -1;
    const membre: Imembre = {
      id_membre: this.membre.id_membre,
      pseudo: this.membre.pseudo,
      password: this.membre.password,
      nom: this.membre.nom,
      prenom: this.membre.prenom,
      admin: this.membre.admin,
      email: this.membre.email,
      pseudo_slack: this.membre.pseudo_slack,
      image: this.membre.image,
      fonction: this.membre.fonction,
      niveau_general: this.membre.niveau_general,
      disponibilite_habituelle: this.membre.disponibilite_habituelle,
      disponibilite_actuelle: this.membre.disponibilite_actuelle
    };
    const inscription: Iinscription = {
      id_inscription: this.inscription.id_inscription,
      nom_inscription: this.inscription.nom_inscription,
      membre_id_membre: this.membre.id_membre // ???
    };
    this.inscriptionService.addInscriptionMembre(this.membre, this.inscription).subscribe(
      result => {this.afficherMessage('Inscription importée', ''); },
      error => {this.afficherMessage('', 'Clef d\'accès déjà utilisée'); }, // Ne fonctionne pas car
      // ce n'est pas une création mais une modification (donc aucune erreur). A voir
    );
  }

  afficherMessage(message: string, erreur: string) {
    this.snackBar.open(message, erreur, {
      duration: 2000,
    });
  }

  rechercher(recherche) {
    this.inscriptionService.searchInscriptions(recherche).subscribe((data: Iinscription[]) => {
      this.dataSourceInscriptions = new MatTableDataSource(data);
      this.dataSourceInscriptions.sort = this.sort;
    });
  }
}
