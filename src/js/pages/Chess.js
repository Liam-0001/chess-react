import Board from "../components/chess/Board";
import {useState} from "react";
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"


function Chess() {
    const [board, setBoard] = useState(
        [
            [
                {name: "br", id: 1},
                {name: "bn", id: 2},
                {name: "bb", id: 3},
                {name: "bq", id: 4},
                {name: "bk", id: 5},
                {name: 'bb', id: 6},
                {name: "bn", id: 7},
                {name: "br", id: 8}],
            [
                {name: "bp", id: 9},
                {name: "bp", id: 10},
                {name: "bp", id: 11},
                {name: "bp", id: 12},
                {name: "bp", id: 13},
                {name: "bp", id: 14},
                {name: "bp", id: 15},
                {name: "bp", id: 16}],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [
                {name: "wp", id: 17},
                {name: "wp", id: 18},
                {name: "wp", id: 19},
                {name: "wp", id: 20},
                {name: "wp", id: 21},
                {name: "wp", id: 22},
                {name: "wp", id: 23},
                {name: "wp", id: 24}],
            [
                {name: "wr", id: 25},
                {name: "wn", id: 26},
                {name: "wb", id: 27},
                {name: "wq", id: 28},
                {name: "wk", id: 29},
                {name: 'wb', id: 30},
                {name: "wn", id: 31},
                {name: "wr", id: 32}]
        ])

    function updateBoard(pieceId, newCoordinate) {

        function filterPiece(id) {
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    if (board[i][j] != null && board[i][j].id === id) return board[i][j]
                }
            }
        }

        function removePieceFromBoard(piece) {
            newBoard = []
            for (let i = 0; i < 8; i++) {
                let row = []
                for (let j = 0; j < 8; j++) {
                    if (board[i][j] !== piece) row.push(board[i][j])
                    else row.push(null)
                }
                newBoard.push(row)
            }
            return newBoard
        }

        function addPieceToBoard(piece, coordinate, board) {
            let newBoard = [...board]; // Create a shallow copy of the board

            const row = parseInt(coordinate.charCodeAt(1)); // Convert row character to integer
            const col = parseInt(coordinate.charCodeAt(0)) % 97; // Convert column character to integer

            newBoard[row][col] = piece;

            return newBoard;
        }

        let newBoard = [[]]

        let piece = filterPiece(pieceId)
        newBoard = removePieceFromBoard(piece)
        newBoard = addPieceToBoard(piece, newCoordinate, newBoard)


        console.log(newBoard)
        setBoard(() => newBoard)
    }


    return (
        <DndProvider backend={HTML5Backend}>
            <div className={'board-game'}>
                <Board boardState={board} updateBoard={updateBoard}/>
            </div>
        </DndProvider>
    )
}

export default Chess
