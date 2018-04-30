import { Iinscription } from './iinscription';
import { ItypeInscription } from './itype-inscription';
import { Isavoir } from './isavoir';
import { IniveauSavoir } from './iniveau-savoir';
export interface Imembre {

    id_membre: number;
    pseudo: string;
    password: string;
    nom: string;
    prenom: string;
    admin: boolean;
    email: string;
    pseudo_slack: string;
    image: string;
    fonction: string;
    niveau_general: string;
    disponibilite_habituelle: string;
    disponibilite_actuelle: boolean;

    inscriptions?: Iinscription[];
    types_inscription?: ItypeInscription[];
    savoirs?: Isavoir[];
    niveaux_savoir?: IniveauSavoir[];

}
