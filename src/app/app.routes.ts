import { Routes } from '@angular/router';
import { LanguagesCategoryTableComponent } from './languages-category-table/languages-category-table.component';
import { HeaderComponent } from './header/header.component';



export const routes: Routes = [
    {path:'' , component :LanguagesCategoryTableComponent},
    {path:'', component :HeaderComponent},
     
];
