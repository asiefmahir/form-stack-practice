import React from 'react';

export default function Number({ title, placeholder, helperText }) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{helperText}</p>
            <input type='number' name='' id='' />
        </div>
    );
}
