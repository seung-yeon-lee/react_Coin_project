// 미들웨어로 알림 메시지 띄우기 action(서버 처리에 대한 알림 메시지를 공통으로 처리하기 위한 작업)

export const SHOW_NOTIFICATION = 'notification/SHOW_NOTIFICATON';
export const HIDE_NOTIFICATION = 'notification/HIDE_NOTIFICATION';

export function showMessage(message, warning = false) {
  return {
    type: SHOW_NOTIFICATION,
    payload: { message, warning },
  };
}
export function hideMessage() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
