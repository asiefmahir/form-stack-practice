import React from 'react';

export default function Email({ title, helperText, placeholder }) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{helperText}</p>
            <input type='email' name='' id='' placeholder={placeholder} />
        </div>
    );
}
