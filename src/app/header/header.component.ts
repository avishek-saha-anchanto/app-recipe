import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed = true;
//   @Output() featureSelected= new EventEmitter<string>();
//  onSelect(feature)
//  {
//   this.featureSelected.emit(feature);
//  }
constructor(private dataStorageService:DataStorageService){}
onSaveData()
{
  this.dataStorageService.storeRecipes();
}
    onFetchData()
    {
      this.dataStorageService.fetchRecipes();    
    }
}
