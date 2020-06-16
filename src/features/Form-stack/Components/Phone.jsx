import React from 'react';

export default function Phone({ placeholder, title, helperText }) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{helperText}</p>
            <input type='tel' name='' id='' placeholder={placeholder} />
        </div>
    );
}
