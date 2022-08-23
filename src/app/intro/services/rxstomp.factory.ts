import {RxstompService} from './rxstomp.service';
import {rxStompConfig} from '../../configuration/rx-stomp.config';

export function rxstompFactory() {
  const rxStomp = new RxstompService();
  rxStomp.configure(rxStompConfig);
  rxStomp.activate();
  return rxStomp;
}
