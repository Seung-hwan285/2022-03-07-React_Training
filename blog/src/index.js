import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// 버튼 렌더링 사각형 9개를 랜더링한다
class Square extends React.Component {

    // 클래스 생성자를 추가해서 state 초기화
    constructor(props) {
        super(props);
        this.state={
            value : null,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={ ()=>{
                this.setState({value:'X'});
            }}>

                {this.state.value}
            </button>
        );
    }
}

// 사각형 9개 랜더링
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        const status = 'Next player: y';

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
