import React from 'react';
import { shape, arrayOf } from 'prop-types';

import './index.css';

const Menu = ({ data }) => (
    data.map(el => {
        return (
            <a className="link" href={el.path}>
                {el.nameLink}
                {el.iconImg && <img className="img" src={el.iconImg} />}
            </a>);
    })
);

Menu.propTypes = {
    data: arrayOf(shape({})).isRequired,
};
  

export default Menu;