import { IcategorieSavoir } from './icategorie-savoir';

export interface Isavoir {

    id_savoir: number;
    nom_savoir: string;
    categorie_savoir_id_categorie_savoir: number;

    categorie_savoir?: IcategorieSavoir;

}
