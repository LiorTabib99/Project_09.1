import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WordCategory } from './shared/model/wordCategory';
import { languageCategoryDetails } from './shared/model/languageCategoryDetails';
import { languages } from './shared/model/languages';
import { LanguagesCategoryTableComponent } from './languages-category-table/languages-category-table.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,LanguagesCategoryTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  enWords = new Map<string,string>([
    ["test","מבחן"],
  ["test1","1מבחן"],
  ["test2","2מבחן"],
  ["test3","3מבחן"]
]);
  heWords = new Map<string,string>([["שלום","hello"]])
  hebrew: WordCategory = new languageCategoryDetails ("colors",673121,"28/04/1999",languages.Hebrew,languages.English,this.heWords)
  english:WordCategory = new languageCategoryDetails("Food",76032, "05/01/1967",languages.English,languages.Hebrew,this.enWords);
  
  languagesDetails:WordCategory[] = [ this.hebrew, this.english ] ;

  
}
