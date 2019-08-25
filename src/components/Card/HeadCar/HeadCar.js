import React from 'react';
import { number } from 'prop-types';

import './HeadCard.css';

const HedCard = ({ count }) => {
    let currentClass;
    if (count === 0 ) currentClass = "default"
    if (count > 0 && count <= 3) currentClass = "one"
    if (count >= 4 && count <= 6) currentClass = "two"
    if (count >= 7 &&  count <= 9) currentClass = "three"
    if (count >= 10) currentClass = "four"

    return (
        <div className={currentClass}>
            <span className="count">
                {Math.floor(count * 8.4)}%
            </span>
        </div>
    );
};

HedCard.propTypes = {
    count: number.isRequired,
};

export default HedCard;