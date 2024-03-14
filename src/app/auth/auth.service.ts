import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";


interface AuthResponseData{
    kind:string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?:boolean;
}
@Injectable({providedIn:'root'})
export class AuthService{
    subscribe() {
      throw new Error('Method not implemented.');
    }

    user= new BehaviorSubject<User>(null);
    constructor(private http: HttpClient, private router: Router){}


    signup(email: string,password:string)
    {
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQEE5pAJ7j767wx5PuhK-wLfZsRw_6Ny0',{
            email:email,
            password: password,
            returnSecureToken: true,
        }).pipe(
            tap(resData=>{
               this.handleAuthentication(resData);
            })
           )
        ;
        // .subscribe({
        //     next:(response)=>console.log(response),
        //     error:(error)=>console.log(error.message)});
    }
    login(email: string,password:string)
    {
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQEE5pAJ7j767wx5PuhK-wLfZsRw_6Ny0',{
            email:email,
            password: password,
            returnSecureToken: true,
        }).pipe(
            tap(resData=>{
               this.handleAuthentication(resData);
            })
           )
        ;
    }
    
  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    // if (this.tokenExpirationTimer) {
    //   clearTimeout(this.tokenExpirationTimer);
    // }
    // this.tokenExpirationTimer = null;
  }
    handleAuthentication(resData:AuthResponseData)
    {
        const expirationDate= new Date(new Date().getTime()+ +resData.expiresIn*1000);
        const user= new User(resData.email,resData.localId,resData.idToken, expirationDate);
        this.user.next(user);
    }

}