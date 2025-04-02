import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Top Users</Link>
        <Link to="/trending">Trending Posts</Link>
        <Link to="/feed">Live Feed</Link>
    </nav>
);

export default Navbar;
