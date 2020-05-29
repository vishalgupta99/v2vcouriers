import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  public selectedLink:string="Tracking-id";
  setradio(e:string):void{
    this.selectedLink=e;
  }
  isSelected(name:string):boolean{
    if(!this.selectedLink){
      return false;
    }
    return (this.selectedLink===name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
