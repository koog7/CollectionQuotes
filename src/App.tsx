import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./containers/Home.tsx";
import AddForm from "./containers/AddForm.tsx";
import Quotes from "./containers/Quotes.tsx";

const App = () => {

    return(
        <>
            <div>
                <div className="navbar">
                    <h2>Quotes Central</h2>
                    <div>
                        <NavLink className="nav-link" to="/">Quotes</NavLink>
                        <NavLink className="nav-link" to="/new-quote">Submit new quotes</NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={(
                        <Home/>
                    )}/>
                    <Route path="/new-quote" element={(
                        <AddForm/>
                    )}/>
                    <Route path="/category/:category" element={(
                        <Quotes/>
                    )}/>
                </Routes>
            </div>
        </>
    );
};

export default App
