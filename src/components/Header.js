import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="Header">
            <h1>Redux crud</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">Post</Link></li>
                    <li><Link to="user">Author</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header