import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatSort
} from '@angular/material';

import { Subscription } from 'rxjs/Subscription';
import { Imembre } from '../imembre';
import { MembreService } from '../membre.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  id: number;
  memb: Imembre;
  errText: string;
  selectedRowIndex = -1;
  edition = false;

  constructor(private route: ActivatedRoute, private membreService: MembreService) {}

  displayedColumns = [/*'pseudo',*/ 'nom', 'prenom'/*, 'email', 'pseudo_slack', 'image'*/, 'fonction'/*, 'niveau_general',
  'disponibilite_habituelle', 'disponibilite_actuelle', 'admin'*/];
  dataSourceMembre = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceMembre.filter = filterValue;
  }

  // ngOnInit() {

  //   this.id = +this.route.snapshot.paramMap.get('id');
  //   // this.route.paramMap.subscribe( params => {
  //   //   this.id = +params.get('id');
  //   // });
  //   this.memb = {
  //     id_membre: null,
  //     pseudo: '',
  //     password: '',
  //     nom: '',
  //     prenom: '',
  //     admin: false,
  //     email: '',
  //     pseudo_slack: '',
  //     image: '',
  //     fonction: '',
  //     niveau_general: '',
  //     disponibilite_habituelle: '',
  //     disponibilite_actuelle: false
  //   };
  //   this.membreService
  //     .getMembre(this.id)
  //     .subscribe(
  //       memb => (this.memb = memb),
  //       error => (this.errText = 'la requete a echoué')
  //     );
  // }

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
  }

  // ngOnInit() {
  //   this.memb = {
  //     id_membre: null,
  //     pseudo: '',
  //     password: '',
  //     nom: '',
  //     prenom: '',
  //     admin: false,
  //     email: '',
  //     pseudo_slack: '',
  //     image: '',
  //     fonction: '',
  //     niveau_general: '',
  //     disponibilite_habituelle: '',
  //     disponibilite_actuelle: false
  //   };

  //   this.refreshTab();

  //   this.membreService.update$.subscribe(() => this.refreshTab());
  // }

  // refreshTab() {
  //   this.membreService
  //     .getMembres()
  //     .subscribe((data: Imembre[]) => {
  //       this.dataSourceMembre = new MatTableDataSource(data);
  //       this.dataSourceMembre.sort = this.sort;
  //     });
  // }

  // highlight(row) {
  //   this.selectedRowIndex = row.id_membre;
  //   this.memb = Object.assign({}, row);
  //   this.edition = true;
  // }

  cancelSelect() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInput();
  }

  // onSubmit() {
  //   if (this.edition) {
  //     this.membreService
  //       .updateMembre(this.memb)
  //       .subscribe();
  //   } else {
  //     this.membreService
  //       .addMembre(this.memb)
  //       .subscribe();
  //   }
  // }

  // deleteMembre() {
  //   this.edition = false;
  //   this.membreService
  //     .deleteMembre(this.memb.id_membre)
  //     .subscribe();
  //   this.clearInput();
  // }

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
