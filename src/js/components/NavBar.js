import {BrowserRouter, Route, Link} from "react-router-dom";

export default function NavBar() {
    return (
        <section id="menu-bar">
            <ul id={'menu'}>
                <li className={'menu-item selected'}>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className={'menu-item'}>
                    <Link to={"/chess"}>
                        Chess
                    </Link>
                </li>
                <li className={'menu-item'}>
                    <Link to={"/checkers"}>
                        Checkers
                    </Link>
                </li>
            </ul>
        </section>
    )
}
