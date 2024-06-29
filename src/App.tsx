import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./containers/Home.tsx";
import AddForm from "./containers/AddForm.tsx";

const App = () => {

    const categories = [
        { title: 'All', id: '' },
        { title: 'Star Wars', id: 'star-wars' },
        { title: 'Motivational', id: 'motivational' },
        { title: 'Inspirational', id: 'inspirational' },
        { title: 'Humor', id: 'humor' },
        { title: 'Love', id: 'love' },
    ];

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
                <aside className="sidebar">
                    <h3>Categories</h3>
                    <div>
                        {categories.map((category) => (
                            <div key={category.id}>
                                <NavLink className={'navlink'} to={`/category/${category.id}`}>
                                    {category.title}
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </aside>
                <Routes>
                    <Route path="/" element={(
                        <Home/>
                    )}/>
                    <Route path="/new-quote" element={(
                        <AddForm/>
                    )}/>
                </Routes>
            </div>
        </>
    );
};

export default App
