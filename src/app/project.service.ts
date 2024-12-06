import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { DefaultProject, Project } from './models/project';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {
	projects$:BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
	project$:BehaviorSubject<Project> = new BehaviorSubject<Project>(DefaultProject);

	projectList: Project[] = [
		{
			projectId: 0,
			projectName: "Model Cabinet",
			projectImages: []
		}
	]

	constructor() { }

	GetAllProjects() {
		this.projects$.next(this.projectList);
	}

	GetProjectByName(name: string){
		this.project$.next(this.projectList.find(p => p.projectName == name)!);
	}
}
