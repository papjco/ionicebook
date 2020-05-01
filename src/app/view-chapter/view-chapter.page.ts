import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, chapter } from '../services/data.service';

@Component({
  selector: 'app-view-chapter',
  templateUrl: './view-chapter.page.html',
  styleUrls: ['./view-chapter.page.scss'],
})
export class ViewChapterPage implements OnInit {
  public chapter: chapter;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.chapter = this.data.getchapterById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? '' : '';
  }

  shouldNavigateBack() {
    return this.chapter.id > 1;
  }
  
  shouldNavigateFwd() {
    return this.chapter.id < this.data.getchapters().length;
  }
}
