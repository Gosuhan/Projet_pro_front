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
  }

  refreshList() {
    this.membreService.getMembresSavoir(this.data).subscribe(membres => this.membres = membres);
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
