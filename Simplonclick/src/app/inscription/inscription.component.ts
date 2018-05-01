import { Iinscription } from './../iinscription';
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
import { InscriptionService } from '../inscription.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Isavoir } from '../isavoir';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
//   id: number;
//   sav: Isavoir;
//   insc: Iinscription;
//   selectedRowIndex = -1;
//   edition = false;
//   details = false;

  // constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private inscriptionService: InscriptionService) {}

//   displayedColumns = ['id_inscription'];
//   dataSourceInscription = new MatTableDataSource();

//   @ViewChild(MatSort) sort: MatSort;

//   applyFilter(filterValue: string) {
//     filterValue = filterValue.trim(); // Remove whitespace
//     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
//     this.dataSourceInscription.filter = filterValue;
//   }

  ngOnInit() {
//     this.insc = {
//       id_inscription: null,
//       membre_id_membre: null,
//       type_inscription_id_type_inscription: null,
//       savoir_id_savoir: null,
//       niveau_savoir_id_niveau_savoir: null,
//       savoir: null
//     };

//     this.route.paramMap.subscribe((params: ParamMap) => {
//       console.log( params.get('id'));
//       this.id = +this.route.snapshot.paramMap.get('id');

//     this.refreshTab();

//     this.inscriptionService.update$.subscribe(() => this.refreshTab());
//     });
  }

//   refreshTab() {
//     this.inscriptionService
//       .getInscriptionsMembre(this.id)
//       .subscribe((data: Iinscription[]) => {
//         this.dataSourceInscription = new MatTableDataSource(data);
//         this.dataSourceInscription.sort = this.sort;
//       });
//     }

//   highlight(row) {
//     this.selectedRowIndex = row.id_inscription;
//     this.insc = Object.assign({}, row);
//     this.edition = true;
//   }

//   cancelSelect() {
//     this.selectedRowIndex = -1;
//     this.edition = false;
//     this.clearInput();
//   }

//   // onSubmit() {
//   //   if (this.edition) {
//   //     this.inscriptionService
//   //       .updateInscription(this.insc)
//   //       .subscribe(
//   //         result => {this.afficherMessage('Enregistrement effectué', ''); },
//   //         error => {this.afficherMessage('', 'Membre déjà existant'); }
//   //       );
//   //   } else {
//   //     this.inscriptionService
//   //       .addInscription(this.insc)
//   //       .subscribe(
//   //         result => {this.afficherMessage('Enregistrement effectué', ''); },
//   //         error => {this.afficherMessage('', 'Membre déjà existant'); }
//   //       );
//   //   }
//   // }

//   afficherMessage(message: string, erreur: string) {
//     this.snackBar.open(message, erreur, {
//       duration: 2000,
//     });
//   }

//   deleteInscriptionMembre() {
//   //   this.edition = false;
//   //   this.inscriptionService
//   //     .deleteInscriptionMembre(this.id, this.insc.id_inscription)
//   //     .subscribe(
//   //       result => {this.afficherMessage('Suppression effectuée', ''); }
//   //     );
//   //   this.clearInput();
//   }

//   clearInput() {
//     this.insc = {
//       id_inscription: null,
//       membre_id_membre: null,
//       type_inscription_id_type_inscription: null,
//       savoir_id_savoir: null,
//       niveau_savoir_id_niveau_savoir: null
//     };
//   }

}
