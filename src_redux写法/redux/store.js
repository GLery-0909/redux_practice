// 用于创建store对象
import { createStore } from 'redux';
// 用于加工状态
import countReducer from './count_reducer';
// 默认暴露创建好的store（传入一个reducer）
export default createStore(countReducer);
