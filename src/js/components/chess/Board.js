import Square from "./Square";

function Board() {
    let squares = []

    let rowBoolean = true
    let currentCharCode = 97
    let internalCounter = 1


    for (let i = 0; i < 64; i++) {
        if (i % 8 === 0) {
            rowBoolean = !rowBoolean
            internalCounter = 1
            if (!(i === 0)) currentCharCode += 1
        }

        let coordinate = String.fromCharCode(currentCharCode) + internalCounter++

        if (rowBoolean) {
            squares.push(<Square key={coordinate} coordinate={coordinate}
                                 colorClass={i % 2 === 0 ? "black" : "white"}/>)
        } else {
            squares.push(<Square  key={coordinate} coordinate={coordinate}
                                 colorClass={i % 2 === 0 ? "white" : "black"}/>)
        }


    }

    return (
        <div className={"board"}>{squares}</div>
    )
}

export default Board
