
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
  constructor() {
    //  idauth: any;
    this.descriptiondepense = '';
    this.justificatifdepense = '';
    this.typerep = '';
    this.jourrep = '';
    this.moisrep = '';
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
