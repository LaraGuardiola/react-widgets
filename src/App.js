import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is JS framework for building UI'
    },
    {
        title: 'How do you use React?',
        content: 'By creating components man'
    }
]

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}