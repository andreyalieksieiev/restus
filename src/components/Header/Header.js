import React from 'react';

import './Header.css';
import Menu from '../UI/Menu';
import { menu, icon } from '../../data/menu';
import Logo from '../../assets/images/Logo.png';

const Header = () => (
    <div className="header">
        <div className="logo"> 
            <a href="/"><img src={Logo}/></a><strong>RESTUS</strong>
        </div>
        <div className="menu">
            <Menu data={menu} />
            <Menu data={icon} />
        </div>
    </div>
);

export default Header;