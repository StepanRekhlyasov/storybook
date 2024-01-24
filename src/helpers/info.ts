import { message } from 'ant-design-vue';
import _ from 'lodash';

interface ToastOptions {
  type?: 'error' | 'success' | 'info' | 'warning' | 'loading';
  msg: string | { response?: { data?: { message?: string }, statusText?: string }, message?: string };
}

export const toast = ({ type = 'error', msg }: ToastOptions): void => {
  let messageText: string;

  if (_.isString(msg)) {
    messageText = msg;
  } else if (msg?.response?.data?.message) {
    messageText = msg.response.data.message;
  } else if (msg?.response?.statusText) {
    messageText = msg.response.statusText;
  } else if (msg?.message) {
    messageText = msg.message;
  } else {
    messageText = 'Error';
  }

  message[type](messageText);
};