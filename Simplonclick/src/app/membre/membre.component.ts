import { SavoiraInscriptionComponent } from './../savoira-inscription/savoira-inscription.component';
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
import { InscriptionAuMembreComponent } from '../inscription-au-membre/inscription-au-membre.component';
import { ItypeInscription } from '../itype-inscription';
import { TypeInscriptionaInscriptionComponent } from '../type-inscriptiona-inscription/type-inscriptiona-inscription.component';
import { NiveauSavoiraInscriptionComponent } from '../niveau-savoira-inscription/niveau-savoira-inscription.component';

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
  inscriptionBoolean = false;
  insc: Iinscription;
  selectedInscription = false;
  typeInsc: ItypeInscription;

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private membreService: MembreService,
    private inscriptionService: InscriptionService,
    public dialog: MatDialog
  ) {}

  displayedColumns = ['type_inscription', 'nom_savoir', 'niveau_savoir', 'nom_inscription'];
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
        memb => {
          this.memb = memb;
          this.insc = {
            id_inscription: null,
            nom_inscription: ''
          };
          this.refreshTab();
          this.inscriptionService.update$.subscribe(() => this.refreshTab());
        }
     );
    });
  }

  editMembre() {
    this.edition = false;
      this.membreService
        .updateMembre(this.memb)
        .subscribe(
          result => {this.afficherMessage('Modification enregistrée', ''); },
          error =>  {this.afficherMessage('', 'Merci de rentrer une adresse mail valide'); }
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
    this.membreService
      .getMembre(this.id)
      .subscribe(
        memb => {
          this.memb = memb;
          this.dataSourceInscription = new MatTableDataSource(this.memb.inscriptions);
          this.dataSourceInscription.sort = this.sort;
        }
     );
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

  cancelSelectInsc() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInputInsc();
  }

  onSubmit() {
    if (this.edition) {
    } else {
      this.inscriptionService
        .addInscription(this.insc)
        .subscribe(
          result => {
            this.insc.id_inscription = result.id_inscription;
            this.inscriptionService.addInscriptionMembre(this.memb, this.insc).subscribe(
              succes => {
                console.log(succes);
                this.refreshTab();
                // tslint:disable-next-line:max-line-length
                this.afficherMessage('Nouvel objectif enregistré. Merci de mettre à jour les éléments à définir !', ''); },
              error => {this.afficherMessage('', 'Erreur'); }
            );
          });
    }
  }

  addInscriptionAuMembre() {
    this.dialog.open(InscriptionAuMembreComponent, {
      width: '600px',
      data: this.memb.id_membre
    });
  }

  addTypeInscriptionaInscription() {
    this.dialog.open(TypeInscriptionaInscriptionComponent, {
      width: '600px',
      data: this.insc.id_inscription
    });
  }

  addSavoiraInscription() {
    this.dialog.open(SavoiraInscriptionComponent, {
      width: '600px',
      data: this.insc.id_inscription
    });
  }

  addNiveauSavoiraInscription() {
    this.dialog.open(NiveauSavoiraInscriptionComponent, {
      width: '600px',
      data: this.insc.id_inscription
    });
  }

  // deleteInscriptionMembre(idInscription, idMembre) {
  //   const membre: Imembre = {
  //     id_membre: this.memb.id_membre,
  //     pseudo: this.memb.pseudo,
  //     password: this.memb.password,
  //     nom: this.memb.nom,
  //     prenom: this.memb.prenom,
  //     admin: this.memb.admin,
  //     email: this.memb.email,
  //     pseudo_slack: this.memb.pseudo_slack,
  //     image: this.memb.image,
  //     fonction: this.memb.fonction,
  //     niveau_general: this.memb.niveau_general,
  //     disponibilite_habituelle: this.memb.disponibilite_habituelle,
  //     disponibilite_actuelle: this.memb.disponibilite_actuelle
  //   };
  //   const inscription: Iinscription = {
  //     id_inscription: idInscription,
  //     membre_id_membre: idMembre
  //   };
  //   this.inscriptionService.deleteInscriptionMembre(membre, inscription).subscribe(succes => this.refreshTab());
  // }

  deleteInscription() {
    this.edition = false;
    this.inscriptionService
      .deleteInscription(this.insc.id_inscription)
      .subscribe(
        result => {this.afficherMessage('Suppression effectuée', ''); }
      );
    this.clearInputInsc();
  }

  clearInputInsc() {
    this.insc = {
      id_inscription: null,
      nom_inscription: ''
    };
  }

}
