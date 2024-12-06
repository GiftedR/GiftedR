export interface Project{
    projectId: number,
    projectName: string
    projectImages: string[]
}

export const DefaultProject: Project = {
    projectId: -1,
    projectName: "Blank Project",
    projectImages: []
}