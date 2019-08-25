import React, {Component} from 'react';
import { shape } from 'prop-types';

import HeadCard from './HeadCar/HeadCar';
import './Card.css';

class Card extends Component {
    state = {
        res1: {
            checked: false,
        },
        res2: {
            checked: false,
        },
        res3: {
            checked: false,
        },
        res4: {
            checked: false,
        },
        res5: {
            checked: false,
        },
        res6: {
            checked: false,
        },
        res7: {
            checked: false,
        },
        res8: {
            checked: false,
        },
        res9: {
            checked: false,
        },
        res10: {
            checked: false,
        },
        res11: {
            checked: false,
        },
        res12: {
            checked: false,
        }
    }

    clickHandler = event => {
        this.setState({ [event.target.name]: {
            checked: !this.state[event.target.name].checked
        }});
    }

    render() {
        const { data } = this.props;

        const { res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12 } = this.state;

        let count = 0;
        if (res1.checked) count += 1;
        if (res2.checked) count += 1;
        if (res3.checked) count += 1;
        if (res4.checked) count += 1;
        if (res5.checked) count += 1;
        if (res6.checked) count += 1;
        if (res7.checked) count += 1;
        if (res8.checked) count += 1;
        if (res9.checked) count += 1;
        if (res10.checked) count += 1;
        if (res11.checked) count += 1;
        if (res12.checked) count += 1;

        return(
            <div className="OneCard">
                <HeadCard count={count} />
                <hr/>
                <div className="taimBlock">
                    <input name="res1" className="checkInput" id={data.reserve1.one.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve1.one.id} className={res1.checked ? 'active' : null}>
                            {data.reserve1.one.time}
                        </label>
                    <input name="res2" className="checkInput" id={data.reserve1.two.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve1.two.id} className={res2.checked ? 'active' : null}>
                            {data.reserve1.two.time}
                        </label>
                </div>
                <div className="taimBlock">
                    <input name="res3" className="checkInput" id={data.reserve2.one.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve2.one.id} className={res3.checked ? 'active' : null}>
                            {data.reserve2.one.time}
                        </label>
                    <input name="res4" className="checkInput" id={data.reserve2.two.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve2.two.id} className={res4.checked ? 'active' : null}>
                            {data.reserve2.two.time}
                        </label>
                </div>
                <div className="taimBlock">
                    <input name="res5" className="checkInput" id={data.reserve3.one.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve3.one.id} className={res5.checked ? 'active' : null}>
                            {data.reserve3.one.time}
                        </label>
                    <input name="res6" className="checkInput" id={data.reserve3.two.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve3.two.id} className={res6.checked ? 'active' : null}>
                            {data.reserve3.two.time}
                        </label>
                </div>
                <div className="taimBlock">
                    <input name="res7" className="checkInput" id={data.reserve4.one.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve4.one.id} className={res7.checked ? 'active' : null}>
                            {data.reserve4.one.time}
                        </label>
                    <input name="res8" className="checkInput" id={data.reserve4.two.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve4.two.id} className={res8.checked ? 'active' : null}>
                            {data.reserve4.two.time}
                        </label>
                </div>
                <div className="taimBlock">
                    <input name="res9" className="checkInput" id={data.reserve5.one.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve5.one.id} className={res9.checked ? 'active' : null}>
                            {data.reserve5.one.time}
                        </label>
                    <input name="res10" className="checkInput" id={data.reserve5.two.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve5.two.id} className={res10.checked ? 'active' : null}>
                            {data.reserve5.two.time}
                        </label>
                </div>
                <div className="taimBlock">
                    <input name="res11" className="checkInput" id={data.reserve6.one.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve6.one.id} className={res11.checked ? 'active' : null}>
                            {data.reserve6.one.time}
                        </label>
                    <input name="res12" className="checkInput" id={data.reserve6.two.id} type="checkbox" onClick={this.clickHandler}/>
                        <label htmlFor={data.reserve6.two.id} className={res12.checked ? 'active' : null}>
                            {data.reserve6.two.time}
                        </label>
                </div>
            </div>
        );
    }
}


Card.propTypes = {
    data: shape({}).isRequired,
};

export default Card;