export class Depenses {
    $iddepense: string;
  //  idauth: any;
    titredepense: string;
    montantdepense: number;
    datedepense: Date ;
    cathegoriedepense: string ;
    descriptiondepense: string ;
    //justificatifdepense: File;
  coverUrl: string;

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
