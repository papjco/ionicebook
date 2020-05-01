import { Component, OnInit, Input } from '@angular/core';
import { chapter } from '../services/data.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class chapterComponent implements OnInit {
  @Input() chapter: chapter;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
