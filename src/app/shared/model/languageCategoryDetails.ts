import { languages } from "./languages";
import { WordCategory } from "./wordCategory";

export class languageCategoryDetails implements WordCategory {
    
    categoryName : string;
    numberID : number ;
    lastChangeDate : string;
    sourceLanguage : languages;
    destinationalLanguage : languages;
    wordToTranslation: Map<string, string>;

    constructor(categoryName:string,numberID:number,lastChangeDate:string, 
        sourceLanguage:languages, destinationalLanguage:languages,wordToTranslation:Map<string, string>){
            this.categoryName=categoryName;
            this.numberID = numberID;
            this.lastChangeDate = lastChangeDate;
            this.sourceLanguage = sourceLanguage;
            this.destinationalLanguage = destinationalLanguage;
            this.wordToTranslation = wordToTranslation;
    }


    
}