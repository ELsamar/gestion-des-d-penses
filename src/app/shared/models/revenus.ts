export class Revenus {
    $idrevenu :string;
    titrerevenu : string;
    montantrevenu : number;
    daterevenu : Date ;
    descriptionrevenu : string ;
    justificatifrevenu : File;
    
}
export class Upload {

    $key: string;
    justificatifrevenu:File;
    name:string;
    url:string;
    progress:number;
    createdAt: Date = new Date();
  
    constructor(file:File) {
      this.justificatifrevenu = file;
    }
  }