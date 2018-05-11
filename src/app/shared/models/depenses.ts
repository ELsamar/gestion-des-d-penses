export class Depenses {
    $iddepense: string;
  //  idauth: any;
    titredepense: string;
    montantdepense: number;
    datedepense: Date ;
    cathegoriedepense: string ;
    descriptiondepense: string ;
  //coverUrl: string;
    //justificatifdepense: File;
    typerep: string ;
    active: boolean;
    jourrep: string;
    moisrep: string;
  datefrom: Date;
  dateto: Date;
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
