import { PouchDBService } from './../../../services/pouch-db.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private results: Object;
  private word: string = "";
  private meaning: string = "";
  constructor(public pouch: PouchDBService) {
    pouch.createPouchDB();
  }

  sendForRegisterWord(){
    console.log(this.word, this.meaning);
    this.pouch.insertWord(this.word, this.meaning);
    console.log(this.pouch.getWords());
  }
  
}
