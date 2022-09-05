import {RxstompService} from './rxstomp.service';
import {rxStompConfig} from '../../configuration/rx-stomp.config';

export function rxstompFactory() {
  const rxStomp = new RxstompService();

  return rxStomp;
}
