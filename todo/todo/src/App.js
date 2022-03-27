import logo from './logo.svg';
import './App.css';
import OnTodoItems from "./component/TodoItem/onTodoItems";

 //최상단 컴포넌트
// [x] 입력 추가
// [] 버튼 누르면 삭제
// []

function App() {
  return (
    <div className="App">
      <OnTodoItems/>
    </div>
  );
}

export default App;
