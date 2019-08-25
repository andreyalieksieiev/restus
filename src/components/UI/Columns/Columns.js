import React from 'react';
import { shape } from 'prop-types';

import Card from '../../Card/Card';

const Columns = ({ data }) => (
    <div className="columnsBblock">
        <Card data={data.zalVip1}/>
        <Card data={data.zalStandart}/>
        <Card data={data.zalVip2}/>
    </div>
);

Columns.propTypes = {
    data: shape({}).isRequired,
};

export default Columns;