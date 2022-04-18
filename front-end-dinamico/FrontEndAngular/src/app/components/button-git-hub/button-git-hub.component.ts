import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-git-hub',
  templateUrl: './button-git-hub.component.html',
  styleUrls: ['./button-git-hub.component.css']
})
export class ButtonGitHubComponent implements OnInit {

  constructor() { }
  ButtonGitHub:string = './assets/images/logo-GitHub.png';
  Link:string = "https://github.com/PabloAmico";
  ngOnInit(): void {
  }

}
