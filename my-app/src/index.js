import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class Square extends React.Component{
    render() {
        return (
            <button className = 'square'>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square value = {i}/>
        );
    }
    render() {
        return(
            <div>
                <div className = "board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className = "board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className = "board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        };
    }
    render() {
        return(
            <div className = 'game'>
                <Board />
                <div className = 'game-info'>

                </div>
            </div>
        );
    }
}

ReactDom.render(<Game />, document.querySelector('#root'));