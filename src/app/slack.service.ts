import { Injectable } from '@angular/core';
import { User } from './interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlackService {
  users = new BehaviorSubject<User[]>([
    {
      name: "John Doe",
      messages: ["Hi there!", "You there?"]
    },
    {
      name: "Christina",
      messages: ["Hello", "Where are you?"]
    },
    {
      name: "Cathy",
      messages: ["How are you?", "Need to talk to you."]
    },
    {
      name: "June",
      messages: []
    },
    {
      name: "Jack",
      messages: []
    },
    {
      name: "Adam",
      messages: []
    }
  ])

  selectedIdx = new BehaviorSubject<number>(0)

  constructor() { }

  updateUserName(newUserName: string, idx: number) {
    const currentUsers = this.users.getValue()
    currentUsers[idx].name = newUserName
    this.users.next(currentUsers)
  }

  updateSelectedIdx(idx: number) {
    this.selectedIdx.next(idx)
  }
}
