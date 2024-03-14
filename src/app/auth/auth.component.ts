import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
   selector:'app-auth',
   templateUrl:'./auth.component.html' 
})
export class AuthComponent{
isLoginMode=true;
isLoading=false;
authObs=Observable<AuthenticatorResponse>;

constructor(private authService:AuthService, private router: Router){}
switchMode()
{
    this.isLoginMode=!this.isLoginMode;
}
onSubmit(form: NgForm)
{
    const email=form.value.email;
    const password=form.value.password;
    this.isLoading=true;
    if(this.isLoginMode)
    {
       this.authService.login(email,password).subscribe({
        next:(response)=>{
            console.log(response);
            this.router.navigate(['/recipes'])
        },
        error:(error)=>console.log(error.message)})
        //....
    }
    else{
        this.authService.signup(email,password).subscribe({
            next:(response)=>{
                console.log(response);
                this.router.navigate(['/recipes']);
                },
                 error:(error)=>console.log(error.message)});
        // subscribe((resData)=>{
        //     console.log(resData);
        // },error=>{
        //     console.log("error");
        //     console.log(error.message);
        // });

    }
    this.isLoading=false;
    console.log(form);
    form.reset();
}
}