import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ActionService} from '../../services/action.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('contact') contactRef: ElementRef;
  constructor(private action: ActionService) { }

  ngOnInit(): void {
    this.receiveClickNotification()
  }

  receiveClickNotification(){
    this.action.clickEvent.subscribe(event => {
      if (event.target.outerText === 'Contact us'){
        this.scrollTo('contact')
      }else if(event.target.outerText === 'About us'){
        this.scrollTo('about')
      }else if(event.target.outerText == 'Blog'){
        console.log('go to blog')
      }else{
        console.log('default')
      }
    })
  }

  scrollTo(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }



}
