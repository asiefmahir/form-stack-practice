import React from 'react';

function TextInput({ required, title, placeholder = '', helperText = '' }) {
    return (
        <div className='form-group border border-danger p-3 my-2'>
            <label>
                {title} {required && <span className='text-danger'>*</span>}
            </label>
            <input
                className='form-control'
                type='text'
                placeholder={placeholder}
            />
            <small className='form-text text-muted'>{helperText}</small>
        </div>
    );
}

export default TextInput;
