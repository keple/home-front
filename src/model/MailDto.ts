export class MailDto {
  title: string;
  contents: string;
  mailerName: string;
  captcha: any;
  constructor({title , contents, mailerName , captcha}) {
    this.title = title;
    this.contents = contents;
    this.mailerName = mailerName;
    this.captcha = captcha;
  }
}
