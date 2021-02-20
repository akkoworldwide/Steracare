import { Component, OnInit } from '@angular/core';
import {ActionService} from '../../services/action.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private action: ActionService) { }

  ngOnInit(): void {
  }

  handleAboutUsClick(event: any): void {
    this.action.handleClick(event)
  }

  handleContactUsClick(event: any){
    this.action.handleClick(event)
  }

  handleBlogClick(event: any){
    this.action.handleClick(event)
  }

}
