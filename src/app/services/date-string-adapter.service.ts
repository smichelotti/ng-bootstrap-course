import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DateStringAdapterService implements NgbDateAdapter<string> {

  fromModel(value: string): NgbDateStruct {
    if (!value) {
      return;
    }
  
    let segments = value.split('-');
    return {
      year: Number(segments[0]),
      month: Number(segments[1]),
      day: Number(segments[2])
    };
  }
  
  toModel(date: NgbDateStruct): string {
    if (!date) {
      return;
    }
    return `${date.year}-${date.month}-${date.day}`;
  }
}
