import { ProfileService } from './../profile.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent implements OnInit {
  @Input() name: string = 'Frederick';
  @Input() description: string = '3 Jahre alt';
  @Input() img: string = '1.jpg';
  @Input() canFollow: boolean = true;

  constructor(public ps: ProfileService) {}

  ngOnInit(): void {}
}
