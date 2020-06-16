import React from 'react';

export default function Radio({ title, helperText, data }) {
    return (
        <div className='form-group border border-danger p-3 my-2'>
            <h4>{title}</h4>
            <p>{helperText}</p>
            {data.map(({ id, field }) => (
                <div key={field}>
                    <p>
                        <input type='radio' name={title} id={field} />
                        {field}
                    </p>

                    {/* <input type='checkbox' name={field} id='' /> */}
                </div>
            ))}
        </div>
    );
}
