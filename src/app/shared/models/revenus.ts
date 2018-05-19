export class Revenus {
  $idrevenu: string;
   // idauth: string;
    titrerevenu: string;
    montantrevenu: number;
    daterevenu: Date ;
    descriptionrevenu: string ;
    coverUrl: string;
    typerep: string ;
    active: boolean;
    jourrep: string;
    moisrep: string;
    datefrom: Date;
    dateto: Date;
   // justificatifrevenu: File;
}
/*export class Upload {

    $key: string;
    justificatifrevenu: File;
    name: string;
    url: string;
    progress: number;
    createdAt: Date = new Date();
    constructor(file: File) {
      this.justificatifrevenu = file;
    }*/
    export class FileUpload {

      key: string;
      name: string;
      url: string;
      file: File;
    
      constructor(file: File) {
        this.file = file;
      }
    }
