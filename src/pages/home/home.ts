import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {ConversationPage} from "../conversation/conversation";
import {UserService} from "../../services/user";
import {Status, User} from "../../interfaces/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: User[];
  query: string;
  yuliana: User = {
    name: 'Yuliana',
    age: 26,
    active: false,
    status: Status.Away
  };
  status: Status;

  constructor(public navCtrl: NavController, public userService: UserService) {
    this.users = this.userService.get();
    this.userService.add(this.yuliana);
  }


  goToLogin() {
    this.navCtrl.push(LoginPage)
  }
  goToConversation(user) {
    this.navCtrl.push(ConversationPage, {data: user});
  }

  getIconByStatus(status){
    let icon = '';
    switch(status){
      case 'Online' :
      icon = 'logo_live_online.png';
      break;
      case 'Offline' :
      icon = 'logo_live_offline.png';
      break;
      case 'Busy' :
      icon = 'logo_live_busy.png';
      break;
      case 'Away' :
      icon = 'logo_live_away.png';
      break;
      case 'AppearOffline' :
      icon = 'logo_live_appear_offline.png';
      break;
      
    }
    return icon;
  }
}
