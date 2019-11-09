import { PouchDBService } from './../../../services/pouch-db.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private exibicao: Object;
  public word: string = "";
  public meaning: string = "";

  constructor(private pouch: PouchDBService) {
    this.pouch.createPouchDB();
    
  }
  sendForRegisterWord() {
    console.log(this.word, this.meaning);
    this.pouch.insertWord(this.word, this.meaning);
    this.updateList();
  }
  sendForDeleteWord(word) {
    console.log(word);
    this.pouch.deleteWord(word);
    this.updateList();
    delete this.exibicao
  }

  updateList(){
    this.pouch.getWords().then((docs) => {
      this.exibicao = docs;
      console.log(this.exibicao);
    });
  }
  
}
