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

  editMembre() {
    this.edition = false;
      this.membreService
        .updateMembre(this.memb)
        .subscribe();
  }

  deleteMembre() {
    this.edition = false;
    this.membreService
      .deleteMembre(this.memb.id_membre)
      .subscribe();
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
