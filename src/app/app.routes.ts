import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'projects', component: ProjectsComponent},
	{ path: 'projects/:projectname', component: ProjectPageComponent},
	{ path: 'experience', component: ExperienceComponent}
];
