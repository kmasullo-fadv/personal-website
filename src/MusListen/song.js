import React from 'react';

export default function song(title, i) {
    const handleClick = (e) => {
        e.preventDefault();
        const id = parseInt(e.target.id);
        console.log(id);
    }
        return(
            <div className="songDiv" key={title}>
                <button id={i} onClick={handleClick}>{title}</button>
            </div>
        )
}