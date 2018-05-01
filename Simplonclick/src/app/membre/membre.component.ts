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
import { InscriptionService } from './../inscription.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Iinscription } from '../iinscription';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {
  id: number;
  memb: Imembre;
  errText: string;
  selectedRowIndex = -1;
  edition = false;
  edit = false;
  objectif = false;
  inscription = false;
  insc: Iinscription;

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private membreService: MembreService,
    private inscriptionService: InscriptionService
  ) {}

  displayedColumns = ['id_inscription'];
  dataSourceInscription = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceInscription.filter = filterValue;
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
          disponibilite_actuelle: false
        };
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log( params.get('id'));
      this.id = +this.route.snapshot.paramMap.get('id');

      this.membreService
      .getMembre(this.id)
      .subscribe(
        memb => (this.memb = memb),
     );
    });

    this.insc = {
      id_inscription: null
    };
    this.refreshTab();

    this.inscriptionService.update$.subscribe(() => this.refreshTab());
  }

  editMembre() {
    this.edition = false;
      this.membreService
        .updateMembre(this.memb)
        .subscribe(
          result => {this.afficherMessage('Modification enregistrée', ''); }
        );
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
        result => {this.afficherMessage('Votre compte a bien été supprimé', ''); }
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

  refreshTab() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log( params.get('id'));
      this.id = +this.route.snapshot.paramMap.get('id');
    this.inscriptionService
      .getInscriptionsMembre(this.id)
      .subscribe((data: Iinscription[]) => {
        this.dataSourceInscription = new MatTableDataSource(data);
        this.dataSourceInscription.sort = this.sort;
      });
    });
  }

  highlight(row) {
    this.selectedRowIndex = row.id_inscription;
    this.insc = Object.assign({}, row);
    this.edition = true;
  }

  cancelSelect() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInput();
  }

  onSubmit() {
    // if (this.edition) {
    //   this.savoirService
    //     .updateSavoir(this.sav)
    //     .subscribe();
    // } else {
    //   this.savoirService
    //     .addSavoir(this.sav)
    //     .subscribe(
    //       result => {this.afficherMessage('Enregistrement effectué', ''); },
    //       error => {this.afficherMessage('', 'Savoir déjà présent'); }
    //     );
    // }
  }

  deleteInscriptionMembre(idInscription, idMembre) {
    const membre: Imembre = {
      id_membre: this.memb.id_membre,
      pseudo: this.memb.pseudo,
      password: this.memb.password,
      nom: this.memb.nom,
      prenom: this.memb.prenom,
      admin: this.memb.admin,
      email: this.memb.email,
      pseudo_slack: this.memb.pseudo_slack,
      image: this.memb.image,
      fonction: this.memb.fonction,
      niveau_general: this.memb.niveau_general,
      disponibilite_habituelle: this.memb.disponibilite_habituelle,
      disponibilite_actuelle: this.memb.disponibilite_actuelle
    };
    const inscription: Iinscription = {
      id_inscription: idInscription,
      membre_id_membre: idMembre
    };
    this.inscriptionService.deleteInscriptionMembre(membre, inscription).subscribe(succes => this.refreshTab());
  }

  clearInputInsc() {
    this.insc = {
      id_inscription: null,
    };
  }

}
