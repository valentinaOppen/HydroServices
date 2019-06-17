import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNews'
})
export class FilterNewsPipe implements PipeTransform {

  transform(value: any, arg: any): any 
  {    
    const resultNews = [];
    for (let index = 0; index < value.length; index++) 
    {
      const element = value[index];      
      if(value[index].news_title.toLowerCase().indexOf(arg.toLowerCase())>-1)
      {
        resultNews.push(value[index]);
      }      
    }    
    return resultNews;
  }

}
