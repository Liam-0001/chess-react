import Square from "./Square";
import {useDrop} from "react-dnd";

function Board({boardState, updateBoard}) {

    let squareInformation = []
    let currentCharCode = 97
    for (let i = 0; i < 8; i++) {
        let isWhite = i % 2 === 0


        for (let j = 0; j < 8; j++) {
            let coordinate = String.fromCharCode(currentCharCode + i) + (j + 1)
            squareInformation.push({coordinate: coordinate, isWhite: isWhite, piece: boardState[i][j]})
            isWhite = !isWhite
        }
    }

    return (
        <div className={"board"}>{squareInformation.map(square =>
            <Square key={square.coordinate}
                    isWhite={square.isWhite}
                    piece={square.piece}
                    dropped={updateBoard}
                    coordinate={square.coordinate}/>
        )}</div>
    )
}

export default Board
