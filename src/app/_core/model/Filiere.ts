import { Niveau } from "./niveau";

export class Filiere {
    id: number;
    nomfiliere: string;
    intitule: string;
    anneetude: number;
    description: string;
    cycle: Cycles;
    niveauxs: Niveau[];
    createdAt: Date;
    updatedAt: Date;
  
    constructor(
      id: number,
      nomfiliere: string,
      intitule: string,
      anneetude: number,
      description: string,
      cycle: Cycles,
      niveauxs: Niveau[],
      createdAt: Date,
      updatedAt: Date
    ) {
      this.id = id;
      this.nomfiliere = nomfiliere;
      this.intitule = intitule;
      this.anneetude = anneetude;
      this.description = description;
      this.cycle = cycle;
      this.niveauxs = niveauxs;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  
  export class Cycles {
    // Define properties for Cycles if not done already in your code.
  }
  
  export class NiveauxDTO {
    // Define properties for NiveauxDTO if not done already in your code.
  }
  