import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Body from '../../components/Body/Body';
import Delivery from '../../containers/Delivery/Delivery';
import Guests from '../../containers/Guests/Guests';
import Tables from '../../containers/Tables/Tables';
import Overview from '../../containers/Overview/Overview';

const Reserve = () => (
    <div className="Res">
        <Switch>
            <Route path="/delivery" component={Delivery} />
            <Route path="/guests" component={Guests} />
            <Route path="/tables" component={Tables} />
            <Route path="/overview" component={Overview} />
            <Route path="/" exact component={Body} /> 
        </Switch>
    </div>
);

export default Reserve;