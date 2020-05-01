import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-view-chapter',
  templateUrl: './view-chapter.page.html',
  styleUrls: ['./view-chapter.page.scss'],
})
export class ViewChapterPage implements OnInit {
  public message: Message;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.message = this.data.getMessageById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? '' : '';
  }

  shouldNavigateBack() {
    return this.message.id > 1;
  }
  
  shouldNavigateFwd() {
    return this.message.id < this.data.getMessages().length;
  }
}
