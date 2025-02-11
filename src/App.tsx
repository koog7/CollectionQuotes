import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import AddForm from "./containers/AddForm.tsx";
import Quotes from "./containers/Quotes.tsx";
import Edit from "./containers/Edit.tsx";

const App = () => {

    return(
        <>
            <div>
                <div className="navbar">
                    <h2><NavLink className={'logo'} to="/">Quotes Central</NavLink></h2>
                    <div>
                        <NavLink className="nav-link" to="/">Quotes</NavLink>
                        <NavLink className="nav-link" to="/new-quote">Submit new quotes</NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={(
                        <Quotes />
                    )}/>
                    <Route path="/new-quote" element={(
                        <AddForm/>
                    )}/>
                    <Route path="/category/:category" element={(
                        <Quotes/>
                    )}/>
                    <Route path="/quotes/:id/edit" element={(
                        <Edit/>
                    )}/>
                </Routes>
            </div>
        </>
    );
};

export default App;