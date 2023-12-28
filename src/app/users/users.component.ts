import { Component, OnInit } from '@angular/core';
import { Utilisateur } from './utilisateur';
import { CalculServiceService } from '../calcul-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private calcul: CalculServiceService) { }
  public use!: any
  public user!: any

  listUsers!: Utilisateur[]

  ngOnInit(): void {
    this.listUsers = [
      { id: 1, name: "Leanne Graham", username: "", email: "Sincere@april.biz" },
      { id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv" },
      { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" }]

    this.use = this.calcul.getNumberOf(this.listUsers, "username", "")

  }
  verify() {
    this.user = this.listUsers.length - this.use
  }
}
