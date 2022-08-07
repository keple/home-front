export class AxiosError {
  private status;
  constructor(status: number) {
    this.status = status;
  }
  public getStatus(): number {
    return this.status;
  }
}
