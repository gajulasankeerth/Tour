import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tournamentDataModel } from '../add-tournament/tournamentDataModel';

@Component({
  selector: 'app-view-tournament',
  templateUrl: './view-tournament.component.html',
  styleUrls: ['./view-tournament.component.css']
})
export class ViewTournamentComponent implements OnInit {
  tournamentdata3:Array<tournamentDataModel>=[]
 name=" ";
 endd=""
 startd="";
  constructor(private router:ActivatedRoute,private routerback:Router) { }
  ngOnInit(): void {
    this.router.params.subscribe( (param: { [x: string]: string; })=>{
      this.name=param["name"]
      this.tournamentdata3=JSON.parse(sessionStorage.getItem("id")+'')
      var i=0
      for(let i=0;i <= this.tournamentdata3.length; i++ )
     {
       if(this.name==this.tournamentdata3[i].name) { this.startd=this.tournamentdata3[i].startDate;
        this.endd=this.tournamentdata3[i].endDate;
       }
     }
    
    })
  }
  goback(){
    this.routerback.navigate(['/tournamnetSetup'])
  }
}
