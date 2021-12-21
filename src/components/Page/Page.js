import React, { useState, useEffect } from 'react';
import { Card } from '..';

import './Page.scss'

export const Page = () =>
{
    const [ loading, setLoading ] = useState(true);
    const [ joke, setJoke ] = useState({});

    useEffect(() =>
    {
        fetch("https://v2.jokeapi.dev/joke/Christmas")
        .then(response => response.json())
        .then(json =>
        {
            console.log(json);
            setJoke(json);
            setLoading(false);
        });
    }, []);

    return(
        <main id="Page">
            {
                loading ?
                <div>Läd</div>
                :
                <Card setup={ joke.setup } delivery={ joke.delivery } />
            }
        </main>
    )
}
