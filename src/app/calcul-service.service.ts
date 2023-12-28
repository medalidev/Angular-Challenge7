import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService implements OnInit {

  constructor() { }
  public nbr = 0;
  ngOnInit(): void {

  }
  getNumberOf(list: any[], critiria: string, value: any) {
    return list.filter((e) => e[critiria] == value).length
    // for (let i = 0; i < list.length; i++) {
    //   if (list[i][critiria] == value) {
    //     this.nbr++
    //   }
    // }
    // return this.nbr
  }

}
