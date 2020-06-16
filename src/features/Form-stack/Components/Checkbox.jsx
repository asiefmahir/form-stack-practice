import React from 'react';

function Checkbox({ title, data, helperText }) {
    // console.log(data);

    return (
        <div className='form-group border border-danger p-3 my-2'>
            <h1>{title}</h1>
            <p>{helperText}</p>
            {data.map(({ id, field }) => (
                <div key={id}>
                    <p>
                        <input type='checkbox' name={field} id='' />
                        {field}
                    </p>

                    {/* <input type='checkbox' name={field} id='' /> */}
                </div>
            ))}
        </div>
    );
}

export default Checkbox;
