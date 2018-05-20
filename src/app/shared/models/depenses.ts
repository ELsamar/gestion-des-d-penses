export class Depenses {
    $iddepense: string;
  //  idauth: any;
    titredepense: string;
    montantdepense: number;
    datedepense: Date ;
    categoriedepense: string ;
    descriptiondepense: string ;
  justificatifdepense: string;
    typerep: string ;
    active: boolean;
    jourrep: string;
    moisrep: string;
    datefrom: Date;
    dateto: Date;
    categorirevenu: string ;
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
