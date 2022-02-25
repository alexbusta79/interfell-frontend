import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isCollapsed = false;
  public areaAmministrativa = false;
  constructor() { }

  ngOnInit(): void {
  }
  toogleAreaAmministrativa(){
    this.areaAmministrativa = !this.areaAmministrativa;
  }
}
