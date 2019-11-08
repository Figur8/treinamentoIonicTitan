import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import wordInterface from 'src/app/interfaces/wordsInterface';


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

  insertWord(word: string, meaning: string){
    this.pouchDB.put({
      _id: word,
      meaning: meaning,
    });
  }

  getWords(){
    this.pouchDB.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
      // handle result
      let test: Object = result;
      console.log(this.test); 
      return result;
    }).catch(function (err) {
      console.log(err);
      return err;
    });

  }
}
