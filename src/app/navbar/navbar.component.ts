import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
	  RouterLink
  ],
  providers: [
    ProjectService
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  proj: ProjectService = inject(ProjectService)
  projects$: Observable<Project[]>;

  constructor() {
    this.projects$ = this.proj.projects$;
  }

  ngOnInit(): void {
    this.proj.GetAllProjects();
  }
}
