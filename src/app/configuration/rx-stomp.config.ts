import {RxStompConfig} from '@stomp/rx-stomp';
import {environment} from '../../environments/environment';

export function rxStompConfig(token): RxStompConfig{
  return {
    brokerURL: `${environment.wsUrl}?token=${token}`,
    connectHeaders : {
      Authorization : localStorage.getItem('token')
    },
    reconnectDelay: 10000,
    debug: (msg: string): void => {
      console.log(new Date(), msg);
    }
  };
};
