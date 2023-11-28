import {Niveau} from "./niveau";
import {Etudiant} from "./etudiant";

export class Classes {
  id : number = 0;
  nom : string = "";
  numero: string ="";
  etudiants: Etudiant = new Etudiant()
  anneeUniver: Date= new Date();
  niveauxId: number = 1;
  createdAt :Date  =new Date();
  updatedAt: Date =new Date();
}
