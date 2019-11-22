import React, { useState } from 'react';
import { Layout } from 'antd';
import { SquareForm } from './SquareForm';
import SideDrawer from './SideDrawer'


export function Game() {

    const { Header } = Layout;

    const [squares, setSquares] = useState([
        { text: "hi" },
        { text: "bye" },
        { text: "ok" },
        { text: "yes" }
    ]);

    const [state, setState] = useState(true);

    function Toggle(){
        console.log("clicked!");
        state ? setState(false) : setState(true);
        console.log({state})
    }

    const addSquare = text => {
        const newSquares = [...squares, { text }];
        setSquares(newSquares);
    }




    function Square({square}){
        return(
        <div>{square.text}</div>
        )
    } 


    return (
        <Layout>
            <Header>Bingo</Header>
            < SideDrawer />
            < SquareForm addSquare={addSquare} />
            <div className="wrapper">
                <div className="game-name"><h1>Bingo</h1></div>
                {squares.map((square, index) => (
                    <div className="item" >
                        <Square
                            key={index}
                            index={index}
                            square={square}
                            onClick={Toggle} 
                            className={ state ? "item" : "item-clicked"}
                        />
                    </div>

                ))
                
                }
            </div>
        </Layout>

    );


}