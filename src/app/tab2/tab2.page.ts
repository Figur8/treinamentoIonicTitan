import { PouchDBService } from './../../../services/pouch-db.service';
import { Component } from '@angular/core';
const HEROES = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
];

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public results: object = HEROES;
  public word: string = "";
  public meaning: string = "";
  public pouch: PouchDBService
  constructor(pouch: PouchDBService) {
    pouch.createPouchDB();
    
  }

  sendForRegisterWord(){
    console.log(this.word, this.meaning);
    this.pouch.addWord(this.word, this.meaning);
  }
}
