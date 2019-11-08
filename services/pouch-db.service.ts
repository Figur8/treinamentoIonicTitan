import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';


@Injectable({
  providedIn: 'root'
})
export class PouchDBService {
  public  pouchDB: any;
  constructor() {
  }
  createPouchDB(){
    this.pouchDB = new PouchDB('words.db');
  }

  addWord(word: string, meaning: string){
    console.log(word, meaning);
  //   this.pouchDB.put({
  //     _id: word,
  //     meaning: meaning
  //   });
   }
}
