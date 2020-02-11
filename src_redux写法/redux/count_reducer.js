import { INCREMENT, DECREMENT } from './action_types';

export default function(preState = 0, action) {
  const { type, data } = action;
  let newState;

  switch (type) {
    case INCREMENT:
      newState = preState + data;
      return newState;

    case DECREMENT:
      newState = preState - data;
      return newState;
    // 初始化状态
    default:
      return preState;
  }
}
