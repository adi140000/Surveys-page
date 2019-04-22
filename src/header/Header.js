import React from 'react';


const Header = () => {
    return (
        <header>
            <div className="logo">sur<span className="special_letter">v</span>e<span className="special_letter">y</span>s</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Surveys</li>
                    <li>Create</li>
                </ul>
                <div className="btns">
                    <button className="btn btn_login btns_children">Log in</button>
                    <button className="btn btn_register btns_children">Register</button>
                </div>

            </nav>
        </header>
    );
}

export default Header;