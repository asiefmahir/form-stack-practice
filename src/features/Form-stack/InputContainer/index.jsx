import React, { useContext, useState } from 'react';
import { FormContext } from '../Context/context';
import InputCard from './InputCard';

export default function InputContainer({
    title,
    setTitle,
    placeholder,
    setPlaceholder,
    helperText,
    setHelperText,
    selecTedButton,
    setSelectedButton,
    option,
    setOption,
    isRequired,
    setIsRequired,
    data,
    setdata,
}) {
    const { state, dispatch } = useContext(FormContext);

    let [formName, setFormName] = useState('');
    const OnNameChange = (e) => {
        setFormName(e.target.value);
        dispatch({
            type: 'NAME_CHANGE',
            payload: formName,
        });
    };
    return (
        <div>
            <div>
                <h2>Hello</h2>
                <input
                    type='text'
                    value={formName}
                    onChange={OnNameChange}
                    placeholder='Form-Name'
                    className='form-control'
                />
            </div>
            <div>
                <button
                    onClick={() => setSelectedButton('text')}
                    className='my-2 mr-1'>
                    Text
                </button>
                <button
                    onClick={() => setSelectedButton('email')}
                    className='my-2 mr-1'>
                    Email
                </button>
                <button
                    onClick={() => setSelectedButton('number')}
                    className='my-2 mr-1'>
                    Number
                </button>
                <button
                    onClick={() => setSelectedButton('radio')}
                    className='my-2 mr-1'>
                    Single Choice
                </button>
                <button
                    onClick={() => setSelectedButton('checkbox')}
                    className='my-2 mr-1'>
                    Multiple Choice
                </button>
            </div>
            {selecTedButton && (
                <InputCard
                    title={title}
                    setTitle={setTitle}
                    placeholder={placeholder}
                    setPlaceholder={setPlaceholder}
                    helperText={helperText}
                    setHelperText={setHelperText}
                    option={option}
                    setOption={setOption}
                    isRequired={isRequired}
                    setIsRequired={setIsRequired}
                    data={data}
                    setdata={setdata}
                    type={selecTedButton}
                    setSelectedButton={setSelectedButton}
                />
            )}
        </div>
    );
}
