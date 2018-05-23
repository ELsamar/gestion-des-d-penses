export class User {
 // $iduser: string ;
  nom: string;
  prenom: string;
  nomutulisateur: string ;
  emailuser: string ;
  datenaissance: string ;
  nationalite: string;
  pays: string;
  etatcivil: string;
  profession: string ;
  sexe: string ;
imageuser = ' ';
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
