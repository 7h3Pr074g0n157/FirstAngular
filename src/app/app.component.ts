import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // postImages = ['1', '2', '3', '4', '5', '6', '7', '8'];
  // postTexts = [
  //   'Hallo, mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen.',
  //   'Hallo zusammen. Freut mich, dass ihr hier seid!!',
  //   'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt.',
  //   'Ich esse gerne Kekse.',
  // ];

  postContent = [
    {
      img: '1.jpg',
      text: 'Hallo, mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen.',
    },
    {
      img: '2.jpg',
      text: 'Hallo zusammen. Freut mich, dass ihr hier seid!!',
    },
    {
      img: '3.jpg',
      text: 'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt.',
    },
    {
      img: '4.jpg',
      text: 'Ich esse gerne Kekse.',
    },
  ];

  buttonClicked() {
    alert('Hallo, wie geht es dir?');
  }
}
