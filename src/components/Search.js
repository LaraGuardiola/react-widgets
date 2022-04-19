import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('')

    //useEffect has 3 scenarios setted by the second parameter
    // 1. [] Run at initial render
    // 2. nothing. Run at initial render and every render
    // 3. [term] Run at initial render and every render if term changes. MOST COMMON

    //useEffect cannot accept async/await, a helper function is needed, an IIFE with an async function, or use promises
    useEffect(() => {
        const search = async () => {
            await axios.get('https://es.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })
        }
        search();
    }, [term])

    

    return (
        <div className="search">
            <div className="ui form">
                <label>Enter Search Term</label>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)} 
                    className="input" 
                    type="text" 
                    placeholder="Search..." 
                />
            </div>
        </div>
    )
}

export default Search;