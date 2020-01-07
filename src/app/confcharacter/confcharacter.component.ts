import { Component, OnInit } from '@angular/core';
import { Bruto } from "../models/bruto";
import { ModelService } from "../services/model.service";
@Component({
  selector: 'app-confcharacter',
  templateUrl: './confcharacter.component.html',
  styleUrls: ['./confcharacter.component.css']
})
export class ConfcharacterComponent implements OnInit {
  bruto:Bruto=new Bruto();
  objbruto:any={
    key:0,
    name:"",
    life:0,
    strength:0,
    agility:0,
    speed:0,
    victory:0,
    wounds:0,
    experience:0,
    level:0,
    category:"",
    character:"",
    pet:"",
  };
  category: any[] = [
    {
      img: "https://raw.githubusercontent.com/DiegoTafurSan13/appElbruto/master/src/assets/clasificacion/alma_de_breserk.png",
      name:"Alma de Breserk", 
    },
    {
      img:"https://raw.githubusercontent.com/DiegoTafurSan13/appElbruto/master/src/assets/clasificacion/arrancador_de_tiritas.png",
      name: "Arrancador de Tiritas",
    },
    {
      img:"https://raw.githubusercontent.com/DiegoTafurSan13/appElbruto/master/src/assets/clasificacion/bofetada_de_norris.png",
      name:"Bofetada de Norris",
    },
  ];
  character: any[] = [
    {
      img: "https://raw.githubusercontent.com/DiegoTafurSan13/appElbruto/master/src/assets/personajes/p1.png",
      name:"p1", 
    },
    {
      img:"https://raw.githubusercontent.com/DiegoTafurSan13/appElbruto/master/src/assets/personajes/p2.png",
      name: "p2",
    },
    {
      img:"https://raw.githubusercontent.com/DiegoTafurSan13/appElbruto/master/src/assets/personajes/p3.png",
      name:"p3",
    },
  ];
  pets: any[] = [
    {
      img: "https://raw.githubusercontent.com/DiegoTafurSan13/appElbruto/master/src/assets/mascotas/Bearr.png",
      name:"Bear", 
    },
    {
      img:"https://raw.githubusercontent.com/DiegoTafurSan13/appElbruto/master/src/assets/mascotas/Dogpng.png",
      name: "Dog",
    },
    {
      img:"https://raw.githubusercontent.com/DiegoTafurSan13/appElbruto/master/src/assets/mascotas/Wolfpng.png",
      name:"Wolf",
    },
  ];
  
  constructor(private http:ModelService) { }

  ngOnInit() {
    this.http.getCharacter().snapshotChanges().subscribe(items=>{
      this.objbruto.key=items.length;
      console.log(this.objbruto.key);
      console.log(items.length);
      
      
    });
  }
  cambio(valor){
    this.objbruto.category=valor;
  }
  asignarPer(img,name){
    this.objbruto.character=img;
    this.objbruto.name=name;
    console.log(this.objbruto.character);
    console.log(this.objbruto.name);
  }
  asignarPet(valor){
    this.objbruto.pet=valor;
    console.log(this.objbruto.pet);
  }
  insertar(){
    console.log(this.objbruto);
    this.bruto.$key=this.objbruto.key;
    this.bruto.agility=this.objbruto.agility;
    this.bruto.category=this.objbruto.category;
    this.bruto.character=this.objbruto.character;
    this.bruto.experience=this.objbruto.experience;
    this.bruto.level=this.objbruto.level;
    this.bruto.life=this.objbruto.life;
    this.bruto.name=this.objbruto.name;
    this.bruto.pet=this.objbruto.pet;
    this.bruto.speed=this.objbruto.speed;
    this.bruto.strength=this.objbruto.strength;
    this.bruto.victory=this.objbruto.victory;
    this.bruto.wounds=this.objbruto.wounds;
    this.http.insertCharacter(this.bruto);
    this.reset();
  }
  reset(){
    this.objbruto.key=0;
    this.objbruto.agility=0;
    this.objbruto.category="";
    this.objbruto.character="";
    this.objbruto.experience=0;
    this.objbruto.level=0;
    this.objbruto.life=0;
    this.objbruto.name="";
    this.objbruto.pet="";
    this.objbruto.speed=0;
    this.objbruto.strength=0;
    this.objbruto.victory=0;
    this.objbruto.wounds=0;
  }
}
