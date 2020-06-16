import React from 'react';

export default function Date({ title, defaultDate, helperText }) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{helperText}</p>
            <input type='date' name='' id='' value={defaultDate} />
        </div>
    );
}
