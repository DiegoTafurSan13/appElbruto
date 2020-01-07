import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { Bruto } from "../models/bruto";
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  brutoList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getCharacter() {
    return this.brutoList = this.firebase.list('character');
  }

  insertCharacter(bruto: Bruto) {
    console.log(bruto);
    
    this.brutoList.push({
      key:bruto.$key,
      name: bruto.name,
      life: bruto.life,
      strength: bruto.strength,
      agility: bruto.agility,
      speed: bruto.speed,
      victory: bruto.victory,
      wounds: bruto.wounds,
      experience: bruto.experience,
      level: bruto.level,
      category: bruto.category,
      character: bruto.character,
      pet: bruto.pet,
    });
  }
}
