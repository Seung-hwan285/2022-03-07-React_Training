import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {Container, Wrapper} from "./styled/Template";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";


function App() {
    return (
        <Container>
            <Wrapper>
                <h1>Todo</h1>
                <InputForm/>
                <TodoList/>
            </Wrapper>
        </Container>
    );
}

export default App;
