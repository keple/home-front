export class AdminServiceModelInf {
  serviceName: string;
  tech: string;
  serviceRouteUrl: string;
  serviceActuatorUrl: string;
}

export class AdminServicesModel {
  serviceName;
  tech;
  serviceRouteUrl;
  serviceActuatorUrl;
  constructor(data: AdminServiceModelInf) {
    this.serviceName = data.serviceName;
    this.tech = data.tech;
    this.serviceRouteUrl = data.serviceRouteUrl;
    this.serviceActuatorUrl = data.serviceActuatorUrl;
  }
}
