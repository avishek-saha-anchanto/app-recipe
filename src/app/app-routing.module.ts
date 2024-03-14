import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeStartComponentComponent } from "./recipes/recipe-start-component/recipe-start-component.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { AuthComponent } from "./auth/auth.component";


const appRoutes:Routes=[
    {path:'', redirectTo:'/recipes', pathMatch: "full" },
    {path:'shopping-list',component: ShoppingListComponent},
    {path:'recipes', component:RecipesComponent, children:[
        {path:'', component: RecipeStartComponentComponent},
        {path:'new', component:RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path:':id/edit', component:RecipeEditComponent},
    ] },
    {path:"auth" ,component:AuthComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}