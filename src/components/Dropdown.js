import React, { useState, useEffect } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)

    //since v17 adding event listeners(the vanilla way) needs a third parameter, otherwise events are not fired, more info: https://reactjs.org/blog/2020/08/10/react-v17-rc.html#fixing-potential-issues
    useEffect(() => {
        document.body.addEventListener('click', () => {
            setOpen(false)
        }, {capture: true})
    }, [])

    const renderedOptions = options.map(option => {
        //returning null with react.js means not rendering anything
        if(option.value === selected.value) {
            return null
        }

        return (
            <div className="item" key={option.value} onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    })
    //event bubbling taking place, ex: we click on a list item rendered by renderedOptions, it returns an event that goes to the parent that has an onClick event
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a color</label>
                <div onClick ={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;