import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
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

const App=()=>{


  const [res, setResult]= useState('');
  const [value,setValue]=useState('');
  const [tries,setTries]=useState([]);
  const [answer,setAnsewer]=useState(getNumber());


  const onChanegInput=(e)=>{

    setValue(e.target.value);

  }

  const onSubmitInput=(e)=>{

      e.preventDefault();

      if(value === answer.join('')){
          setResult('홈런');
          setTries((prevState => {
              return [...prevState , {try : value, res:'홈런'}];
          }));

      }else{
          const answerArray = value.split('').map((v)=>parseInt(v));
            console.log(answerArray);
            console.log(tries);

            let strike =0;
            let ball =0;


            console.log(tries.length);
            if(tries.length >= 2){

                alert('게임을 다시 시작합니다');

                setTries([]);
                setValue('');
                setAnsewer(getNumber());

            }
            else{

                for(let i=0; i<4; i++){
                    if(answerArray[i] === answer[i]){
                        strike+=1;
                    }else if(answer.includes(answerArray[i])){
                        ball+=1;
                    }
                }

                setTries((
                    prevState =>
                        [...prevState, {try: value, res : `${strike} 스트라이크 입니다. ${ball}볼 입니다`}]));
            }

      }

  }

  return(
      <div>
        <h1>야구게임입니다.</h1>

        <form onSubmit={onSubmitInput}>
          <input maxLength={4} value={value} onChange={onChanegInput}/>
        </form>

        <div>시도: {tries.length}</div>

        <ul>
          {tries.map(($el,i)=>{

            return(
                <Try key={i} tryInfo={$el} />
            )
          })}
        </ul>
      </div>
  )
}

//
// class App extends Component{
//   state={
//     res : '',
//     value : '',
//     tries : [],
//     answer: getNumber(),
//   };
//
//   onChangeInput=(e)=>{
//     console.log(this.state.answer);
//
//     this.setState({
//       value : e.target.value,
//     });
//
//   };
//
//   onSubmitForm=(e)=>{
//
//     e.preventDefault();
//     if(this.state.value === this.state.answer.join('')){
//       this.setState({
//         result : '홈런',
//         tries : [...this.state.tries, {try: this.state.value, result : '홈런'}],
//       });
//     }
//     else{
//       // 답 틀렸으면
//       const answerArray = this.state.value.split('').map((v)=>parseInt(v));
//
//       console.log(answerArray);
//       let strike =0;
//       let ball =0;
//       if(this.state.tries.length >=2){
//
//
//         alert('게임을 다시 시작합니다');
//
//         this.setState({
//
//             tries : [{result : `${this.state.answer.join(',')}`}]
//         });
//
//
//         this.setState({
//           value : '',
//           tries : [],
//           answer: getNumber(),
//         });
//       }
//
//       else{
//         for(let i=0; i<4; i++){
//           if(answerArray[i] === this.state.answer[i]){
//             strike +=1;
//           }else if(this.state.answer.includes(answerArray[i])){
//             ball+=1;
//           }
//         }
//
//         this.setState({
//           tries : [...this.state.tries , {try : this.state.value , result: `${strike} 스트라이크 ${ball} 볼입니다`}],
//           value : '',
//         });
//       }
//     }
//
//   };
//
//
//
//   render() {
//     return (
//         <div>
//           <h1>fdsa</h1>
//
//             <form onSubmit={this.onSubmitForm}>
//                 <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
//             </form>
//
//             <div>
//                 시도: {this.state.tries.length}
//             </div>
//
//
//             <ul>
//                 {this.state.tries.map(($el,i)=>{
//                     return (
//                         //tryInfo : {try : this.state.value , result: `${strike} 스트라이크 ${ball} 볼입니다`}
//                         <Try key={i} tryInfo={$el} id={i}/>
//
//                     )
//                 })}
//
//             </ul>
//         </div>
//     );
//   }
//
// }

export default App;
