import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  techSkills = [
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'Node.js', icon: 'assets/icons/nodedotjs.svg' },
    { name: 'PostgreSQL', icon: 'assets/icons/postgresql.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'HTML5', icon: 'assets/icons/html5.svg' },
    { name: 'CSS', icon: 'assets/icons/css.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' },
    { name: 'Sequelize', icon: 'assets/icons/sequelize.svg' },
    { name: 'ExpressJs', icon: 'assets/icons/expressjs.svg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
