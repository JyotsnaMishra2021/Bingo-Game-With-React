import React, { Component } from'react';
import BingoSquare from'./BingoSquare.js';
import './BingoStyle.css';
import './oneBingo.css';
class BingoGame extends Component{
    constructor(){
        super();
        this.state ={
              matrix : Array(5).fill('N').map(row => new Array(5).fill('N'))
        }
    }
    handleCallback = (childData) =>{
        this.setState({data: childData})
    }

    render(){
    
    const cellsArrayList = [
        {
            id : "1_1",
            value: "Hi, who just joined?"
        },
        {
            id : "1_2",
            value:  "Can you email that to everyone?"
        },
        {
            id : "1_3",
            value: "Is ____ on the call?"
        },
        {
            id : "1_4",
            value: "Uh, ____, you're still sharing..."
        },
        {
            id : "1_5",
            value: "I have to jump on another call"
        },
        {
            id : "2_1",
            value: "sound of someone typing, possibly with a hammer"
        },
        {
            id : "2_2",
            value: "Loud, painful echo/ feedback"
        },
        {
            id : "2_3",
            value: "Hi, can you hear me?"
        },
        {
            id : "2_4",
            value: "No, it's still loading"
        },
        {
            id : "2_5",
            value: "Child or animal noises"
        },
        {
            id : "3_1",
            value: "Next slide, please"
        },
        {
            id : "3_2",
            value: "Can everyone go on mute?"
        },
        {
            id : "3_3",
            value: "FREE SPACE"
        },
        {
            id : "3_4",
            value: "Hello? Hello?"
        },
        {
            id : "3_5",
            value: "I'm sorry, I was on mute"
        },
        {
            id : "4_1",
            value: "So (cuts out) I can (unintelligble). Ok?"
        },
        {
            id : "4_2",
            value: "Sorry I'm late (insert excuse)"
        },
        {
            id : "4_3",
            value: "I have a hard stop at..."
        },
        {
            id : "4_4",
            value: "You cut out there"
        },
        {
            id : "4_5",
            value: "Can we take this offline?"
        },
        {
            id : "5_1",
            value: "I'll have to get back to you"
        },
        {
            id : "5_2",
            value: "Can everyone see my screen?"
        },
        {
            id : "5_3",
            value: "Sorry, I was having connection issues"
        },
        {
            id : "5_4",
            value: "I think there's some lag"
        },
        {
            id : "5_5",
            value: "I didn't catch that. Can you repeat?"
        }
      ];
      const squareCards = cellsArrayList.map((squareCard,i) =>{
        return(
            <BingoSquare key={i} id={cellsArrayList[i].id} name={cellsArrayList[i].value} />
        );
    })
        return(
<div className="mainclass">
    <h1>Lets Play Conference Call Bingo!!</h1>
  {squareCards}
</div>
        );
    }
}
export default BingoGame;