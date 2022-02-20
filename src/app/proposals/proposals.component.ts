import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent implements OnInit {
  // friendProposals = [
  //   {
  //     name: 'Marius',
  //     description: '2 Jahre alt',
  //     img: '1',
  //   },
  //   {
  //     name: 'Franziska',
  //     description: 'Gräbt gerne Löcher',
  //     img: '2',
  //   },
  //   {
  //     name: 'Josephine',
  //     description: 'Spielt gerne',
  //     img: '3',
  //   },
  //   {
  //     name: 'Patrick',
  //     description: 'Hamsterrad-Freak',
  //     img: '4',
  //   },
  // ];

  constructor(public ps: ProfileService) {}

  ngOnInit(): void {}
}
