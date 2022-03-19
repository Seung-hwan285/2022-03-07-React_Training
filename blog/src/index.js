
import ReactDOM from 'react-dom';
import './index.css';
import React, { useState } from 'react'


// 자식 <button> 랜더링
const Square=(props)=>{

    const [message , setMessage] = useState({value:null});

    return (
        <button className="square"
                onClick={()=>props.onClick()}>
            {props.value}
        </button>
    )
}

// 부모 사각형 9개 랜더링
const Board = ()=>{
    
    const [message , setMessage] = useState({squares : Array(9).fill(null)});

    const handleClick=(i)=>{
        const value = message.squares.slice();

        value[i]='X';
        setMessage({squares: value})
    }

    // 1번 값들을 받아와서 2
    const renderSquare=(i)=>{

        return <Square
            value={message.squares[i]}
            onClick={()=>handleClick(i)}
        />;

    }

    const status = `Next Player : `;
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
//
// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }


// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
