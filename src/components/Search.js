import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    console.log(results)

    //useEffect has 3 scenarios setted by the second parameter
    // 1. [] Run at initial render
    // 2. nothing. Run at initial render and every render
    // 3. [term] Run at initial render and every render if term changes. MOST COMMON

    //useEffect cannot accept async/await, a helper function is needed, an IIFE with an async function, or use promises
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://es.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })
            setResults(data.query.search)
        }
        //using a setTimeout to delay the requests
        const timeoutId = setTimeout(() => {
            if(term) {
                search()
            }
        },500)

        //cleanup function
        //when you return an arrow function you are returning a references that will be invoked next time useEffect is called
        //so it won't be triggered for the first render
        return () => {
            clearTimeout(timeoutId)
        }

    }, [term])

    const renderedResults = results.map(result => {
        return <div key={result.pageid} className="item">
            <div className="right floated content">
                <a 
                    className="ui button" 
                    href={`https://es.wikipedia.org?curid=${result.pageid}`}
                >
                    Go
                </a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
            </div>
        </div>
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
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
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>

    )
}

export default Search;