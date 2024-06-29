import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./containers/Home.tsx";

const App = () => {
    return(
        <>
            <div>
                <div className={'navbar'}>
                    <h2>Quotes Central</h2>
                    <div>
                        <NavLink className="nav-link" to="/">Quotes</NavLink>
                        <NavLink className="nav-link" to="/new-quote">Submit new quotes</NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={(
                        <Home />
                    )}/>
                </Routes>
            </div>
        </>
    );
};

export default App
