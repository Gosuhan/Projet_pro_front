import { Isavoir } from './isavoir';
import { ItypeInscription } from './itype-inscription';
import { IniveauSavoir } from './iniveau-savoir';
import { Imembre } from './imembre';

export interface Iinscription {

    id_inscription: number;
    membre_id_membre?: number;
    niveau_savoir_id_niveau_savoir?: number;
    savoir_id_savoir?: number;
    type_inscription_id_type_inscription?: number;

    membre?: Imembre;
    type_inscription?: ItypeInscription;
    savoir?: Isavoir;
    niveau_savoir?: IniveauSavoir;

}
