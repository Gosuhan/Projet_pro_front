import { Isavoir } from './isavoir';
import { Imembre } from './imembre';
import { IcategorieSavoir } from './icategorie-savoir';

export interface ItypeInscription {

    id_type_inscription: number;
    type_inscription: string;

    membre?: Imembre;
    savoir?: Isavoir;
    categorie_savoir?: IcategorieSavoir;

}
