import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 자식
// 버튼 X  랜더링한다

function Square(props) {

    return (

        <button className="square" onClick={props.onClick}>
            {props.value}

        </button>
    );
}

// 부모
// 사각형 9개 랜더링
class Board extends React.Component {

    constructor(props) {

        super(props);
        this.state={
            squares : Array(9).fill(null),
            xIsNext : true,

        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();

        squares[i]=this.state.xIsNext ? 'X':'0';
        this.setState({
            squares:squares,
            xIsNext : !this.state.xIsNext
        });
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player:'+(this.state.xIsNext);

        return (
            <div>
                <div className="status">{status}</div>
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
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
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
