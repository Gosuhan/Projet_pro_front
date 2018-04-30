import { Isavoir } from './isavoir';
import { IcategorieSavoir } from './icategorie-savoir';
export interface Iressource {

    id_ressource: number;
    nom_ressource: string;
    url: string;
    savoir_id_savoir: number;

    savoir?: Isavoir;
    categorie_savoir?: IcategorieSavoir;

}
