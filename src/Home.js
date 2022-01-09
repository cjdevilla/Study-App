import {
    Routes,
    Route,
    Link
} from "react-router-dom";

function Home() {
    return (
        <div className="Home">

            <Link to="/about" className="nav-link">About</Link>
            <h1>Homepage Testing</h1>

        </div>
    );
}

export default Home;