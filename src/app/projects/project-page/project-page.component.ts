import { Component, inject, OnInit } from '@angular/core';
import { DefaultProject, Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { ProjectService } from '../../project.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [],
  providers:[
    ProjectService,
    ActivatedRoute
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent implements OnInit {
  project$: BehaviorSubject<Project> = new BehaviorSubject<Project>(DefaultProject);
  proj:ProjectService = inject(ProjectService);
  route:ActivatedRoute = inject(ActivatedRoute);
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(routeparam => {
      this.proj.GetProjectByName(routeparam.get('projectname')!);
    });
  }

}
