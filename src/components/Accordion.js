import React, { useState } from 'react';

const Accordion = ({ items }) => {
    //using state with Hooks (destructuring an array)
    //first item is the state, second is the function to update the state
    const [activeIndex, setActiveIndex] = useState(null); //null is the default state, could be changed

    //helper functions
    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>

        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion