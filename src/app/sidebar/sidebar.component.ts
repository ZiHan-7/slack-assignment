import { Component, OnInit } from '@angular/core';
import { User } from '../interface';
import { SlackService } from '../slack.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  users: User[]
  user: User

  constructor(private service: SlackService) { }

  ngOnInit() {
    this.service.users.subscribe(value => {
      this.users = value
    });
  }

  updateSelectedUser(idx: number) {
    this.service.updateSelectedIdx(idx)
  }

}
