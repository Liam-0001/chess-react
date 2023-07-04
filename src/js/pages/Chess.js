import Board from "../components/chess/Board";
import {useState} from "react";
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import * as constants from "constants";

function Chess() {
    const [board, setBoard] = useState(
        [
            ["br", "bn", "bb", "bq", "bk", 'bb', "bn", "br"],
            ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
            ["wr", "wn", "wb", "wq", "wk", 'wb', "wn", "wr"]
        ])

    function updateBoard() {
        return null
    }

    console.log(board)

    return (
        <DndProvider>
            <div className={'board-game'}>
                <Board boardState={board}/>
            </div>
        </DndProvider>
    )
}

export default Chess
