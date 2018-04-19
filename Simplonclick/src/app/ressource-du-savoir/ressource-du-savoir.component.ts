import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Iressource } from '../iressource';
import { Isavoir } from '../isavoir';
import { SavoirService } from '../savoir.service';
import { RessourceService } from '../ressource.service';

@Component({
  selector: 'app-ressource-du-savoir',
  templateUrl: './ressource-du-savoir.component.html',
  styleUrls: ['./ressource-du-savoir.component.css']
})
export class RessourceDuSavoirComponent implements OnInit {
  ressources: Iressource[];
  ressource: Iressource;
  savoir: Isavoir;

  constructor(
    private savoirService: SavoirService,
    private ressourceService: RessourceService,
    public dialogRef: MatDialogRef<RessourceDuSavoirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.savoir = {
      id_savoir: null,
      nom_savoir: '',
      categorie_savoir_id_categorie_savoir: null,
    };
    this.ressources = [];
    this.savoirService.getSavoir(this.data).subscribe(savoir => this.savoir = savoir);
    this.refreshList();
  }

  refreshList() {
    this.ressourceService.getRessourcesSavoir(this.data).subscribe(ressources => this.ressources = ressources);
  }

  closeDial() {
    this.dialogRef.close();
  }

  delRessourceSavoir(idRessource, nomRessource, urlRessource, idSavoirRessource) {
    const savoir: Isavoir = {
      id_savoir: this.savoir.id_savoir,
      nom_savoir: this.savoir.nom_savoir,
      categorie_savoir_id_categorie_savoir: this.savoir.categorie_savoir_id_categorie_savoir
    };
    const ressource: Iressource = {
      id_ressource: idRessource,
      nom_ressource: nomRessource,
      url: urlRessource,
      savoir_id_savoir: idSavoirRessource
    };
    this.ressourceService.deleteRessourceSavoir(savoir, ressource).subscribe(succes => this.refreshList());
  }

  test() {
    if (this.ressources.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

