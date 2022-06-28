import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultStudents= [];
    for(const students of value){
      if(students.name.indexOf(arg) > -1){
        resultStudents.push(students);
      };
    };
    return resultStudents;
  }

}
