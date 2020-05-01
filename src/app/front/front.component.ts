import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
})
export class FrontComponent implements OnInit {

  constructor(private router:Router) {
   }

  ngOnInit() {}

  bookCoverMethod() {
    this.router.navigateByUrl("/team/33/user/11");
  }

}

