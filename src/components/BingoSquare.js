import React, { Component} from 'react';
import './BingoStyle.css';


var newArray = Array(5).fill('N').map(row => new Array(5).fill('N'));
var totalrows = 5;

var disablearray = [];
var disablearrayList = [];
newArray[2][2] = "Y";
var buttondisabled = false;

class BingoSquare extends Component {

    constructor() {
        super();
        this.state = {
            buttonStyle: "square-button",
            matrix: Array(5).fill('N').map(row => new Array(5).fill('N')),
            disabledButtonStyle: "square-button-disabled",
            bingo: "",
            before: "",
            after: ""
        }

    }

    onTrigger = (event) => {
        this.props.parentCallback("Data from child");
        event.preventDefault();
    }

    rowCheck(matrix, row, col, totalrow) {

        var rowFlag = true;
        for (var j = 1; j <= 5; j++) {
            disablearray[j - 1] = row + "_" + col;
            if (matrix[row - 1][j - 1] !== 'Y') {
                rowFlag = false;
                disablearray = [];
                break;
            }

        }
        if (!rowFlag) {

            rowFlag = true;
            for ( j = 1; j <= 5; j++) {
                disablearray[j - 1] = row + "_" + col;
                if (matrix[j - 1][col - 1] != 'Y') {
                    disablearray = [];
                    rowFlag = false;
                    break;
                }
            }
        }
        if (!rowFlag) {
            let n = parseInt(row) + parseInt(col) - 1;

            rowFlag = true;
            if (row === col) {
                for ( j = 1; j <= 5; j++) {
                    disablearray[j - 1] = row + "_" + col;
                    if (j === 3)
                        matrix[2][2] = "Y";
                    if (matrix[j - 1][j - 1] !== 'Y') {
                        disablearray = [];
                        rowFlag = false;
                        break;
                    }
                }
            }
            else if (col !== row && (n === totalrow)) {

                rowFlag = true;
                for ( j = 1; j <= 5; j++) {
                    let col1 = parseInt(totalrow) - parseInt(j) + 1
                    disablearray[j - 1] = row + "_" + col;
                    if (j === 3)
                        matrix[2][2] = "Y";
                    if (matrix[j - 1][col1 - 1] !== 'Y') {
                        disablearray = [];
                        rowFlag = false;
                        break;
                    }
                }
            }
            else {
                disablearray = [];
                rowFlag = false;
            }
        }
        return rowFlag;
    }
    gameStart(props) {
        this.setState({
            buttonStyle: "square-button-after",
            bingo: "",
            before: "",
            after: ""
        })



        var id = props.id;

        var value = id.split('_');
        const row = value[0];
        const col = value[1];
        newArray[row - 1][col - 1] = "Y";

        var bingo = this.rowCheck(newArray, row, col, totalrows);

        if (bingo === true) {
            //setButtonStyle("square-button-bingo");
            this.setState({
                // buttonStyle : "square-button-bingo",
                bingo: "pyro",
                before: "before",
                after: "after"
            })
            if (disablearray.length > 0) {
                 buttondisabled = true

            }

            setTimeout(() => this.setState({ bingo: "" }), 5000);
            console.log("YAY you won");
        }
    }


    render() {

        return (

            <div>
                <div id="bingoColors" className={this.state.bingo}>
                    <div className={this.state.before}></div>
                    <div className={this.state.after}></div>
                </div>

                {this.props.id === '3_3' ? (
                    <button value={this.props.value} name={this.props.value} id={this.props.id} className="square-button-disabled"  > {this.props.name} </button>
                ) : (


                        <button value={this.props.value} disabled={buttondisabled} name={this.props.value} id={this.props.id} className={this.state.buttonStyle} onClick={(event) => this.gameStart(this.props)} > {this.props.name} </button>
                    )
                }
            </div>

        )
    }


}

export default BingoSquare;
