import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../interface';
import { SlackService } from '../slack.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  user: User
  selectedIdx: number
  messageInput = new FormControl("", [Validators.maxLength(255)])

  constructor(private service: SlackService) { }

  ngOnInit() {
    this.service.users.subscribe(value => {
      if (this.selectedIdx === null) {
        this.user = value[0]
      } else {
        this.user = value[this.selectedIdx]
      }
    })
    this.service.selectedIdx.subscribe(value => {
      this.selectedIdx = value
      const currentUsers = this.service.users.getValue()
      this.user = currentUsers[this.selectedIdx]
    });
  }

  onSend() {
    this.user.messages.push(this.messageInput.value)
  }

  // toggleError(messageInput) {
  //   messageInput.maxlength = !messageInput.maxlength
  //   console.log("The characters typed cannot be exceeding 255 characters.")
  // }

}
