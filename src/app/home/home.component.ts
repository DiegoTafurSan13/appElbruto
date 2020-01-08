import { Component, OnInit } from '@angular/core';
import { ModelService } from "../services/model.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  objbruto: any[] = [];

  constructor(private http: ModelService) { }

  ngOnInit() {
    this.http.getCharacter().snapshotChanges().subscribe(
      items => {
        for (let i = 0; i < items.length; i++) {
          this.objbruto[i] = items[i].payload.toJSON();
        }
        console.log(this.objbruto);
      }
    );
  }

}
