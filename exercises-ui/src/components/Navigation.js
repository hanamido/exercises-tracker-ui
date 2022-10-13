import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function Navigation () {
const navigate = useNavigate();

    return (
        <nav className="App">
            <button><Link to="/" onClick={() => navigate('/')}>Home</Link></button>
            <button><Link to="/add-exercise">Add Entry </Link></button>
        </nav>
    )
}; 

export default Navigation;
