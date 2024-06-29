import {NavLink} from "react-router-dom";

const Home = () => {
    const categories = [
        { title: 'All', id: 'all' },
        { title: 'Star Wars', id: 'star-wars' },
        { title: 'Motivational', id: 'motivational' },
        { title: 'Inspirational', id: 'inspirational' },
        { title: 'Humor', id: 'humor' },
        { title: 'Love', id: 'love' },
    ];

    return (
        <div>
            <aside className="sidebar">
                <h3>Categories</h3>
                <div>
                    {categories.map((category) => (
                        <div key={category.id}>
                            <NavLink className={'navlink'} to={category.id === '' ? '/' : `/category/${category.id}`}>
                                {category.title}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default Home;