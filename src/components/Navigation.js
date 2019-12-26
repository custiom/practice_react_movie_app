import React from 'react';
import {Link} from 'react-router-dom';
import "./Navigation.css"

function Navigation(){
    return <div className ="navigation">
        <Link className="nav_item" to="/">Home</Link>
    </div>
}

export default Navigation;