import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy{

  observer! : Subscription;

  ngOnDestroy(): void {

    this.observer.unsubscribe()

  }

  ngOnInit(): void {


    //Mon observeur
    this.observer = this.monSubject.subscribe({

      // Action que j'execute quand je recois le message (next('Message'))
      next : (data) => {
        console.log(data);
      },

      //Action que j'execute quand je recois une erreur (error('message ou erreur'))
      error(err) {
        console.error(err);
      },

      //Action executé quand on close l'observable avec la func complete (complete())
      complete() {
        console.log('complete');
      }
    })

  }

  valueInput : string = ''

  // Mon observable.
  monSubject : BehaviorSubject<string> = new BehaviorSubject<string>("Hello World")

  sendData(){

    if (this.valueInput == '') {
      this.monSubject.error('CPT')

    }
    else if(this.valueInput == 'stop') {
      this.monSubject.complete()
    }
    else{
      this.monSubject.next(this.valueInput)
    }



  }

}
