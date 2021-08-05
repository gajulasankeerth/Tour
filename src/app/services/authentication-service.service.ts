import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  userData:any
  public header = new BehaviorSubject<boolean>(false);
  cast = this.header.asObservable();

  constructor(private router:Router) { }
  checkUserName(userName:string)//uname-->userName
  {
    for (var k in localStorage) 
    {
      if(k===userName)
      {
        return true
      }
    }
    return false
  }
  verifyPassword(password:string,userName:string)
  {
    this.userData =JSON.parse(localStorage.getItem(userName)+'')
    if(!this.checkUserName(userName))
    {
      alert("please Register!")
    }
    else
    {
    if (password===this.userData.password)
    {
      this.header.next(true);
      alert('Logged In')
      this.router.navigate(["/tournamnetSetup"])
    }
    else
    {
      alert('Invalid Password')
    }
    
  }
  }
}