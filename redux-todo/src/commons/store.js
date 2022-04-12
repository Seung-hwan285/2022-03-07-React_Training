import {createStore} from "redux";
import {reducer} from "./reducer";

// 리덕스 스토어에 reducer를 넣어주는 작업을 해당 파일에서 수행한다.
const store = createStore(reducer);

export default store;
