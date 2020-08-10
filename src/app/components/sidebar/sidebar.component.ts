import { Component, OnInit } from '@angular/core';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  faUserFriends = faUserFriends;

  constructor() {}

  ngOnInit(): void {}
}
