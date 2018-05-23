export class Revenus {
  $idrevenu: string;
   // idauth: string;
    titrerevenu: string;
    montantrevenu: number;
    daterevenu: Date ;
    descriptionrevenu: string ;
    justificatifrevenu: string;
    typerep: string ;
    active: boolean;
    jourrep: string;
    moisrep: string;
    datefrom: Date;
    dateto: Date;
  categorierevenu: string;
  constructor() {
    // idauth: string;
    this.descriptionrevenu = ' ';
    this.justificatifrevenu = ' ';
    this.typerep = ' ';
    this.jourrep = ' ';
    this.moisrep = ' ';
    this.datefrom = new Date();
    this.dateto = new Date();
  }
}

    export class FileUpload {

      key: string;
      name: string;
      url: string;
      file: File;
      constructor(file: File) {
        this.file = file;
      }
    }
