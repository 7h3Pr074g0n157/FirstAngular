import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../profile.service';

@Component({
  selector: 'app-friend-box',
  templateUrl: './friend-box.component.html',
  styleUrls: ['./friend-box.component.scss'],
})
export class FriendBoxComponent implements OnInit {
  static friends = [{ name: '', description: '', img: '' }];
  constructor() {}

  ngOnInit(): void {}
}
