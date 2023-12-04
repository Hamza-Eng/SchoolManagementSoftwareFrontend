import { Filiere } from "./Filiere";

export class cycle {
    id: number;
    name: string;
    description: string;
    centreId: number;
    filieres: Filiere[];
    createdAt: Date;
    updatedAt: Date;
  
    constructor(
      id: number,
      name: string,
      description: string,
      centreId: number,
      filieres: Filiere[],
      createdAt: Date,
      updatedAt: Date
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.centreId = centreId;
      this.filieres = filieres;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  
  export class FilieresDTO {
    // Define properties for FilieresDTO if not done already in your code.
  }
  