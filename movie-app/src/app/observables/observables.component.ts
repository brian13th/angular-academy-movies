import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, Subscription, of } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, AfterViewInit {
  escapeListener$: Observable<any> = fromEvent(document, 'keydown');
  words$ = of('array', 'string', 'number', 'boolean')
  subcription: Subscription;

  inputForm = new FormGroup({
    event: new FormControl('')
  })

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.escapeListener$.subscribe((v) => {
      if(v.key == "Escape"){
        this.inputForm.get('event').setValue('')
      };
    });


  }

  get event(){
    return this.inputForm.get('event').value
  }
}
