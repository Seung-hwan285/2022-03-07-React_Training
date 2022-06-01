import logo from './logo.svg';
import './App.css';
import React , {Component} from "react";
import Try from "./Try";

// 숫자 네개를 랜덤하게 뽑는 함수 for문 사용
const getNumber=()=>{


  const numbres =[1,2,3,4,5,6,7,8,9];

  const array =[];
  for(let i=0; i<4; i++){

    const chose = Math.floor(Math.random()*9);
    array.push(chose);

  }

  return array;
}

class App extends Component{
  state={
    res : '',
    value : '',
    tries : [],
    answer: getNumber(),
  };

  onChangeInput=(e)=>{
    console.log(this.state.answer);

    this.setState({
      value : e.target.value,
    });

  };

  onSubmitForm=(e)=>{

    e.preventDefault();
    if(this.state.value === this.state.answer.join('')){
      this.setState({
        result : '홈런',
        tries : [...this.state.tries, {try: this.state.value, result : '홈런'}],
      });
    }
    else{
      // 답 틀렸으면
      const answerArray = this.state.value.split('').map((v)=>parseInt(v));

      console.log(answerArray);
      let strike =0;
      let ball =0;
      if(this.state.tries.length >=2){


        alert('게임을 다시 시작합니다');

        this.setState({

            tries : [{result : `${this.state.answer.join(',')}`}]
        });


        this.setState({
          value : '',
          tries : [],
          answer: getNumber(),
        });
      }

      else{
        for(let i=0; i<4; i++){
          if(answerArray[i] === this.state.answer[i]){
            strike +=1;
          }else if(this.state.answer.includes(answerArray[i])){
            ball+=1;
          }
        }

        this.setState({
          tries : [...this.state.tries , {try : this.state.value , result: `${strike} 스트라이크 ${ball} 볼입니다`}],
          value : '',
        });
      }
    }

  };



  render() {
    return (
        <div>
          <h1>fdsa</h1>

            <form onSubmit={this.onSubmitForm}>
                <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
            </form>

            <div>
                시도: {this.state.tries.length}
            </div>


            <ul>
                {this.state.tries.map(($el,i)=>{
                    return (
                        //tryInfo : {try : this.state.value , result: `${strike} 스트라이크 ${ball} 볼입니다`}
                        <Try key={i} tryInfo={$el} id={i}/>

                    )
                })}

            </ul>
        </div>
    );
  }

}

export default App;
