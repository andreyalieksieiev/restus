import React from 'react';

import './SideBar.css';

const SideBar = () => (
    <div className="Side">
        <div className="wrap">
            <div className="sideDiv">1</div>
            <div className="sideDiv2">2 seats, VIP</div>
        </div>
        <div className="wrap">
            <div className="sideDiv">2</div>
            <div className="sideDiv2">3 seats, standart</div>
        </div>
        <div className="wrap">
            <div className="sideDiv">3</div>
            <div className="sideDiv2">2 seats, VIP</div>
        </div>
    </div>
);

export default SideBar;