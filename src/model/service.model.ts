export class ServiceModel {
  private serviceName: string;
  private projectTech: string;
  constructor(serviceName: string , projectTech: string) {
    this.serviceName = serviceName;
    this.projectTech = projectTech;
  }
  public getServiceName(): string {
    return this.serviceName;
  }
  public getProjectTech(): string {
    return this.projectTech;
  }
}
