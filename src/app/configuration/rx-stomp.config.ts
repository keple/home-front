import {RxStompConfig} from '@stomp/rx-stomp';
import {environment} from '../../environments/environment';

export const rxStompConfig: RxStompConfig = {
  brokerURL: environment.wsUrl,
  reconnectDelay: 1000,
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
};
