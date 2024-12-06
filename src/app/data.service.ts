import { Injectable, signal } from "@angular/core";
import { Project } from "./models/project";

@Injectable({
    providedIn: 'root'
})
// No backend, so Methods only return from the static projects list
export class DataService{
    
}

// Switch over to this one when Async
// export class DataService{
// }