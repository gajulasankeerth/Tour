import { Component, Injectable } from '@angular/core';
import {AuthenticationServiceService} from '../app/services/authentication-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({ providedIn: 'root' })
export class AppComponent {
  header: any;
  
  title = 'TournamentWebpage';
  menuItems=[
    {
      activeStatus:true,
      colour:"red",
      itemName:"Tournament Setup",
      naviagteTo:"tournamnetSetup"
    },
    {
      activeStatus:false,
      colour:"blue",
      itemName:"Team Setup",
      naviagteTo:"teamSetup"
    },
    {
      activeStatus:false,
      colour:"green",
      itemName:"Fixture Setup",
      naviagteTo:"fixtureSetup"
    },
  ]
  constructor(private accountService:AuthenticationServiceService ) {
    this.accountService.cast.subscribe(x => {
      this.header = x;
    });
    
  }
  onLogout()
  {
    this.header=false;
    
  }
  activestats(str:string){
    for(let i=0;i<this.menuItems.length;i++)
    {
      if(this.menuItems[i].itemName===str) this.menuItems[i].activeStatus=true;
      else this.menuItems[i].activeStatus=false;
    }

  }
}
