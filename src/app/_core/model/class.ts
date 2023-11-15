import {Niveau} from "./niveau";
import {Etudiant} from "./etudiant";

export class Classes {
  id : number = 0;
  nom : string = "";
  etudiants: Etudiant = new Etudiant()
  anneeUniver: Date= new Date();
  niveaux: Niveau = new Niveau();
  createdAt :Date  =new Date();
  updatedAt: Date =new Date();
}
