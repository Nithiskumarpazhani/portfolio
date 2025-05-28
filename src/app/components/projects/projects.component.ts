import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'Job Portal App',
      description: 'Angular + Node.js based job portal with JWT auth and PostgreSQL.',
      image: 'assets/projects/job-portal.png',
      github: 'https://github.com/yourusername/job-portal',
      demo: 'https://yourdomain.com/job-portal'
    },
    {
      title: 'Task Manager',
      description: 'To-do app using Angular and local storage.',
      image: 'assets/projects/task-manager.png',
      github: 'https://github.com/yourusername/task-manager',
      demo: ''
    },
    // Add more projects here
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
