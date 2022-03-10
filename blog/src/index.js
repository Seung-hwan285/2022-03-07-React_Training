import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 자식
// 버튼 X  랜더링한다

function Square(props) {
        return(
            <button className="square" onClick={props.onClick}>
                {props.value}
            </button>
        );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// 부모
// 사각형 9개 랜더링
class Board extends React.Component {

    renderSquare(i) {
        return <Square value={this.props.squares[i]}
            onClick={()=>this.props.onClick(i)}
        />
    }


    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// game 게임판을 렌더링하며 자리 표시자 값을 가지고 있다.

class Game extends React.Component {

    constructor(props) {
        super(props);

        // 초기 state 설정
        this.state={
            history :[{
                squares: Array(9).fill(null),
            }],
            xIsNext : true,
        }
    }
    handlerClick(i){


        const history = this.state.history;
        const current = history[history.length-1];


        const squares = current.squares;


        // 현재 우승자가 나오면 종료
        if(calculateWinner(squares)){
            return;
        }


        //현재 인덱스에 xIsNext 값을 판별
        squares[i]=this.state.xIsNext ? 'X':'O';


        // state 업데이트
        this.setState({
           history : history.concat([{
               squares : squares,
           }]),
            // true 였으면 false, false 였으면 true
           xIsNext : !this.state.xIsNext,
        });
    }

    render() {

        const history = this.state.history;
        const current = history[history.length -1];

        const winner = calculateWinner(current.squares);

        let status;

        if(winner){
            status='Winner'+winner;
        }else{
            status='Next Player '+(this.state.xIsNext ? 'X':'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                    squares ={current.squares}
                    onClick={(i) =>this.handlerClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
