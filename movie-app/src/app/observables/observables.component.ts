import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, Subscription, from } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { DbService } from '../services/db.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, AfterViewInit {
  input: any;
  suggestions: any[] = [];
  flag: boolean = false;
  escapeListener$: Observable<any>;
  movies$: Observable<any>;
  subcription: Subscription;
  letters: Array<any> = [];

  inputForm = new FormGroup({
    event: new FormControl('')
  })

  constructor(private db: DbService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {                                       // creating 2 observables
    this.input = document.querySelector('#input');                // one emitts keybord events
    this.escapeListener$ = fromEvent(this.input, 'keydown');      // second emitts movies
    this.movies$ = from(this.db.getAllMovies());                  // the second waits for the first one to emit at least 3 letters
    this.escapeListener$.subscribe((v) => {                       // and the emitts via pipe / filter only relevant movie
      // console.log(v)
      this.letters.push(v.key)                                    // A BETTER WAY TO LISTEN TO INPUT FIELD WOULD BE
      if(v.key == "Escape"){                                      // inpuntForm.valueChanges from reactive forms
       this.resetInput();                                         // this way we could have a thrid observable and i wouldn't
      };                                                          // exploit fromEvent listener for every emittion.
      if (this.letters.length === 3){
        this.movies$.pipe(
          filter((v)=>
            v.title.toLowerCase().includes(this.letters.join(''))
          )
        ).subscribe(v => {
          this.suggestions.push(v.title);
          this.flag = true;
        })
        // ).subscribe(v => this.inputForm.get('event').setValue(v.title))
      }
    });
  }

  get event(){
    return this.inputForm.get('event').value
  }
  resetInput(){
    this.inputForm.get('event').setValue('');
    this.letters = [];
    this.suggestions = [];
    this.flag = false;
  }
  chooseMovie($event){
    this.resetInput()
    this.inputForm.get('event').setValue($event.target.textContent)
  }
}
