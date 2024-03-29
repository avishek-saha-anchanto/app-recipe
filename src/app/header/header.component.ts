import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuthenticated=false;
  private userSub:Subscription;
//   @Output() featureSelected= new EventEmitter<string>();
//  onSelect(feature)
//  {
//   this.featureSelected.emit(feature);
//  }
constructor(private dataStorageService:DataStorageService,private authService:AuthService){}
ngOnInit(): void {
 this.userSub= this.authService.user.subscribe(user=>{
  this.isAuthenticated=!!user;
  console.log(user);
 });
}
ngOnDestroy(): void {
  this.userSub.unsubscribe();
}
onSaveData()
{
  this.dataStorageService.storeRecipes();
}
    onFetchData()
    {
      this.dataStorageService.fetchRecipes();    
    }

    onLogout(){
      this.authService.logout();
    }
}
