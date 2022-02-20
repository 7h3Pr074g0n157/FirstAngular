import { FriendBoxComponent } from './friend-box/friend-box.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profiles = [
    {
      name: 'Marius',
      description: '2 Jahre alt',
      img: '1.jpg',
    },
    {
      name: 'Franziska',
      description: 'Gräbt gerne Löcher',
      img: '2.jpg',
    },
    {
      name: 'Josephine',
      description: 'Spielt gerne',
      img: '3.jpg',
    },
    {
      name: 'Patrick',
      description: 'Hamsterrad-Freak',
      img: '4.jpg',
    },
  ];
  constructor() {}

  addFriend(name:string, description:string, img:string) {
    FriendBoxComponent.friends.push({
      name: name,
      description: description,
      img: img,
    });
  }
}
