import React from 'react';

import './styles.css';

//import Routes from '../../routes';

const Header = () => (
    <div>
        <header id="main-header">Biblioteca</header>
        <div id="links">
            <ul>
                <li><a href="/novo">Novo</a></li>
                <li><a href="/">Lista</a></li>
            </ul>
        </div>
    </div>
);

export default Header;