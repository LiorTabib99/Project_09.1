import { Component, Input } from '@angular/core';
import { WordCategory } from '../shared/model/wordCategory';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-languages-category-table',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterModule, CommonModule,MatButtonModule],
  templateUrl: './languages-category-table.component.html',
  styleUrl: './languages-category-table.component.css'
})


export class LanguagesCategoryTableComponent {


  _languagesDetails: any[] = [];
  displayedColumns: string[]=['categoryName', 'numberOfWords', 'lastEditDate','actions'];
  dataSource :WordCategory[] = []  




  @Input()
  set languagesDetails(categories:WordCategory[]){

    //test
    // console.log(categories[0].CategoryName)
    //console.log(categories)

    // console.log(catergory)

    categories.forEach(category => 
     { this.dataSource.push(category)
      // console.log((category.wordToTranslation).size)
    }

      )
      //test
      // console.log(
      // `categoryName : ${category.categoryName}
      // `
     // )



    console.log(this.dataSource)

  }


  deleteRowFunc(row:any){
    // console.log(row)
    this.dataSource = this.dataSource.filter((item)=>item.categoryName !== row.categoryName)
    // this.dataSource.splice(2,1)
    
  }
}
