import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import wordInterface from 'src/app/interfaces/wordsInterface';


@Injectable({
  providedIn: 'root'
})
export class PouchDBService {
  private docs: any = {};
  public pouchDB: any;
  private teste: Object;
  constructor() {
  }
  createPouchDB() {
    this.pouchDB = new PouchDB('words.db');
  }
  insertWord(word: string, meaning: string) {
    this.pouchDB.put({
      _id: word,
      meaning: meaning,
    }).then(() => {
      this.getWords();
    });
  }

  deleteWord(word: string) {
    this.pouchDB.get(word).then((doc) => {
      return this.pouchDB.remove(doc);
    }).then(() => {
      this.getWords();
    });
  }

  getWords() {
    this.pouchDB.allDocs({
      include_docs: true,
    }).then((result) => {
      this.docs = result.rows.map(row => {
        return row.doc.meaning;
      });
      console.log(this.docs);

    })
  }
}
