import React from 'react';
import './Body.css';

import Columns from '../UI/Columns/Columns';
import Date from '../Date';
import { days } from '../../data/cardsData';
import SideBar from '../SideBar/SideBar';


const Body = () => (
    <div className="wrapper">
         <div>
            <SideBar />
        </div>
        {days.map(el => 
            <div className="wrap">
                <Date data={el.date}/>
                <Columns data={el}/>
            </div>
        )}
    </div>
);

export default Body;