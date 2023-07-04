import {useDrag} from "react-dnd";

function Piece({piece, pieceName, id}) {
    const [{isDragging}, drag] = useDrag(() => (
        {
            type: "piece",
            item: {id: id},
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging()
            })
        }
    ))

    return <img className={"chess-piece"} src={"/data/pieces/" + piece + ".png"} alt={pieceName} ref={drag}/>
}

export default Piece;
