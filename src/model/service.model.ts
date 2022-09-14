export class ServiceModel {
  private serviceName: string;
  private projectTech: string;
  constructor({serviceName , tech}) {
    this.serviceName = serviceName;
    this.projectTech = tech;
  }
  public getServiceName(): string {
    return this.serviceName;
  }
  public getProjectTech(): string {
    return this.projectTech;
  }
}
