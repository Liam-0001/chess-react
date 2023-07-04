function Square({piece = null, pieceName, isWhite}) {
    return <div className={isWhite ? "white" : "black"}>
        {piece === null ? "" : <img className={"chess-piece"} src={"/data/pieces/" + piece + ".png"} alt={pieceName}/>}
    </div>
}

export default Square
