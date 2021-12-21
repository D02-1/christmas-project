import React from 'react';

import './Card.scss';

export const Card = ({ setup, delivery }) =>
{
    return(
        <div className="Card">
            <img className="santa" src="https://www.ikea.com/kr/en/images/products/vinter-2021-soft-toy-santa-claus-red__0986481_pe817148_s5.jpg" alt="" />
            <h2 className="setup">{ setup }</h2>
            <h3 className="delivery"><i>{ delivery }</i></h3>
        </div>
    );
}
