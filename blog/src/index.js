
import ReactDOM from 'react-dom';
import './index.css';
import React, { useState } from 'react'

// Board 상태가 변화될때 Square 컴포넌트는 다시 랜더링된다.
// 자식 <button> 랜더링
const Square=(props)=>{


    return (
        <button className="square"
                onClick={()=>props.onClick()}>
            {props.value}
        </button>
    )
}



// 부모 사각형 9개 랜더링
const Board = (props)=>{


    const [message , setMessage] = useState({
        squares : Array(9).fill(null),

        // x, o 클릭할때마다 바뀌가 boolean 변수 추가
        xNext : true,
    });

    const handleClick=(i)=>{

        // 불변성때문에 .slice 연산자를 사용해서 배열의 복사본 생성
        // 불변성? 데이터를 직접 변경하지 않고 사본을 만들고나서 데이터를 교체하는 방식
        // 왜 불변성 사용? -> 변하지 않는 데이터는 변경이 이루어졌는지 판단이 쉽고 이를 바탕으로 컴포넌트가 다시 렌더링할지 결정
        // 즉 리액트에서 순수 컴포넌트를 만드는데 도움을 준다.
        const sliceSquares = message.squares.slice();

        console.log(message.xNext)

        sliceSquares[i]=  message.xNext ? 'X':'O';

        setMessage({
            squares: sliceSquares,
            xNext: !message.xNext,
        });
    }

    // 1번 값들을 받아와서 2
    const renderSquare=(i)=>{

        return <Square
            value={message.squares[i]}
            onClick={()=>handleClick(i)}
        />;

    }


    const winner  =calculateWinner(message.squares);


    let status;
    if(winner){
        status= 'Winner' + winner;
    }else{
        status='Next Player' +message.xNext ? 'X':'O';
    }

    // 여기서 값이 전달되고 1
    return (

        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}
// 게임판을 랜더링
const Game=()=>{

    return(

        <div className="game">
            <div className="game-board">
                <Board />

            </div>

            <div className="game-info">

            </div>
        </div>
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


// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
