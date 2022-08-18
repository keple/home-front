import {MailDto} from '../../model/MailDto';

export abstract class ContactService {
  public abstract sendMail(mailDto: MailDto);
}
