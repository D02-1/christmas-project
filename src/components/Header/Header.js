import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';

import './Header.scss';

export const Header = () =>
{
    return(
        <header id="Header">
            Christmas is&nbsp;<Moment fromNow>2021-12-24T00:00-0000</Moment>!
        </header>
    );
}
