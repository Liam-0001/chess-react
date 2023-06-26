export default function Board() {
    let board = []

    for (let i = 0; i < 8; i++) {
        board.push(Row(i))
    }


    return (
        <div className="board">{board}</div>
    )


}

function Row({rowNumber}) {
    let squares = []

    for (let i = 0; i < 8; i++) {
        squares.push(Square())
    }

    return (
        <div className="board-row">
            {squares}
        </div>
    )
}

function Square() {
    return <div className="square"></div>
}

