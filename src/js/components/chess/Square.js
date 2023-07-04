import Piece from "./Piece";
import {useDrop} from "react-dnd";

function Square({
                    piece = null,
                    pieceName,
                    isWhite,
                    dropped,
                    coordinate
                }) {

    const [{isOver}, drop] = useDrop(() => ({
        accept: "piece",
        drop: (item) => dropped(item.id, coordinate),
        collect: (monitor) => (
            {
                isOver: !!monitor.isOver()
            }
        )
    }))

    return <div className={isWhite ? "white" : "black"} ref={drop}>
        {piece === null ? "" : <Piece pieceName={pieceName} piece={piece.name} id={piece.id}/>}
    </div>
}

export default Square
