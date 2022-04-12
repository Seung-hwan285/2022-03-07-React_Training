import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {Container, Wrapper} from "./styled/Template";
import InputForm from "./components/InputForm";



function App() {
  return (
  <Container>
      <Wrapper>
       <InputForm/>
      </Wrapper>
  </Container>
  );
}

export default App;
