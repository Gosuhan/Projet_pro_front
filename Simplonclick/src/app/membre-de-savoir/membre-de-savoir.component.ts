import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Iressource } from '../iressource';
import { Isavoir } from '../isavoir';
import { SavoirService } from '../savoir.service';
import { RessourceService } from '../ressource.service';
import { Imembre } from '../imembre';
import { MembreService } from '../membre.service';

@Component({
  selector: 'app-membre-de-savoir',
  templateUrl: './membre-de-savoir.component.html',
  styleUrls: ['./membre-de-savoir.component.css']
})
export class MembreDeSavoirComponent implements OnInit {
  membresPasseurs: Imembre[];
  membresPasseursDebutants: Imembre[];
  membresPasseursIntermediaires: Imembre[];
  membresPasseursConfirmes: Imembre[];
  membresReceveurs: Imembre[];
  membresReceveursDebutants: Imembre[];
  membresReceveursIntermediaires: Imembre[];
  membresReceveursConfirmes: Imembre[];
  membres: Imembre[];
  membre: Imembre;
  savoir: Isavoir;

  constructor(
    private savoirService: SavoirService,
    private membreService: MembreService,
    public dialogRef: MatDialogRef<MembreDeSavoirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.savoir = {
      id_savoir: null,
      nom_savoir: '',
      categorie_savoir_id_categorie_savoir: null,
    };

    this.membres = [];
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);
    this.refreshList();

    this.membresPasseurs = [];
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);
    this.refreshListPasseurs();

    this.membresPasseursDebutants = [];
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);
    this.refreshListPasseursDebutants();

    this.membresPasseursIntermediaires = [];
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);
    this.refreshListPasseursIntermediaires();

    this.membresPasseursConfirmes = [];
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);
    this.refreshListPasseursConfirmes();

    this.membresReceveurs = [];
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);
    this.refreshListReceveurs();

    this.membresReceveursDebutants = [];
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);
    this.refreshListReceveursDebutants();

    this.membresReceveursIntermediaires = [];
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);
    this.refreshListReceveursIntermediaires();

    this.membresReceveursConfirmes = [];
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);
    this.refreshListReceveursConfirmes();
  }

  refreshList() {
    this.membreService.getMembresSavoir(this.data).subscribe(membres => this.membres = membres);
  }

  refreshListPasseurs() {
    this.membreService.getMembresPasseursSavoir(this.data).subscribe(membresPasseurs => this.membresPasseurs = membresPasseurs);
  }

  refreshListPasseursDebutants() {
    // tslint:disable-next-line:max-line-length
    this.membreService.getMembresPasseursDebutantsSavoir(this.data).subscribe(membresPasseursDebutants => this.membresPasseursDebutants = membresPasseursDebutants);
  }

  refreshListPasseursIntermediaires() {
    // tslint:disable-next-line:max-line-length
    this.membreService.getMembresPasseursIntermediairesSavoir(this.data).subscribe(membresPasseursIntermediaires => this.membresPasseursIntermediaires = membresPasseursIntermediaires);
  }

  refreshListPasseursConfirmes() {
    // tslint:disable-next-line:max-line-length
    this.membreService.getMembresPasseursConfirmesSavoir(this.data).subscribe(membresPasseursConfirmes => this.membresPasseursConfirmes = membresPasseursConfirmes);
  }

  refreshListReceveurs() {
    this.membreService.getMembresReceveursSavoir(this.data).subscribe(membresReceveurs => this.membresReceveurs = membresReceveurs);
  }

  refreshListReceveursDebutants() {
    // tslint:disable-next-line:max-line-length
    this.membreService.getMembresReceveursDebutantsSavoir(this.data).subscribe(membresReceveursDebutants => this.membresReceveursDebutants = membresReceveursDebutants);
  }

  refreshListReceveursIntermediaires() {
    // tslint:disable-next-line:max-line-length
    this.membreService.getMembresReceveursIntermediairesSavoir(this.data).subscribe(membresReceveursIntermediaires => this.membresReceveursIntermediaires = membresReceveursIntermediaires);
  }

  refreshListReceveursConfirmes() {
    // tslint:disable-next-line:max-line-length
    this.membreService.getMembresReceveursConfirmesSavoir(this.data).subscribe(membresReceveursConfirmes => this.membresReceveursConfirmes = membresReceveursConfirmes);
  }

  closeDial() {
    this.dialogRef.close();
  }

  test() {
    if (this.membres.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
