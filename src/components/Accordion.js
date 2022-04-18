import React from 'react';

const Accordion = ({ items }) => {
    //using state with Hooks
    const [activeIndex, setActiveIndex] = React.useState(null);

    //helper functions
    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {

        return (
            <React.Fragment key={item.title}>
                <div
                    className="title active"
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>

        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
        </div>
    )
}

export default Accordion