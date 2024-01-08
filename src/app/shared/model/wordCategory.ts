import { languages } from "./languages";

export interface WordCategory{

    categoryName: string;
    numberID : number;
    lastChangeDate : string;
    sourceLanguage : languages;
    destinationalLanguage: languages;

    //LanguageMap
    wordToTranslation: Map<string , string>;
}


    
