import React, { useContext } from 'react';
import { FormContext } from '../Context/context';

import TextInput from '../Components/TextInput';
import Checkbox from '../Components/Checkbox';
import Email from '../Components/Email';
import Number from '../Components/Number';
import Date from '../Components/Date';
import Phone from '../Components/Phone';
import Radio from '../Components/Radio';
import Title from '../Components/Title';

function OutputContainer({
    setSelectedButton,
    setTitle,
    setPlaceholder,
    setHelperText,
    setOption,
    setIsRequired,
    setdata,
}) {
    const { state, dispatch } = useContext(FormContext);
    // console.log('state changed', state);

    const { formTitle, formData } = state;

    return (
        <div>
            <Title title={formTitle} />
            {formData.map((filed) => {
                if (filed.type === 'text')
                    return (
                        <div key={filed.id}>
                            <TextInput
                                title={filed.title}
                                placeholder={filed.placeholder}
                                helperText={filed.helperText}
                                value={filed.value}
                                required={filed.required}
                            />
                            <br />
                            <div className='buttons form-group'>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => {
                                        setSelectedButton(filed.type);
                                        setHelperText(filed.helperText);
                                        setPlaceholder(filed.placeholder);
                                        setIsRequired(filed.required);
                                        setTitle(filed.title);
                                        setdata(filed.data);
                                        // setOption(filed.option)

                                        dispatch({
                                            type: 'UPDATE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Edit
                                </button>
                                <button
                                    className='btn btn-danger ml-2'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                if (filed.type === 'checkbox')
                    return (
                        <div key={filed.id}>
                            <Checkbox
                                title={filed.title}
                                data={filed.data}
                                helperText={filed.helperText}
                            />
                            <br />
                            <div className='buttons form-group'>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => {
                                        setSelectedButton(filed.type);
                                        setHelperText(filed.helperText);
                                        setPlaceholder(filed.placeholder);
                                        setIsRequired(filed.required);
                                        setTitle(filed.title);
                                        setdata(filed.data);
                                        // setOption(filed.option)

                                        dispatch({
                                            type: 'UPDATE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Edit
                                </button>
                                <button
                                    className='btn btn-danger ml-2'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    );

                if (filed.type === 'email')
                    return (
                        <div key={filed.id}>
                            <Email
                                placeholder={filed.placeholder}
                                title={filed.title}
                                helperText={filed.helperText}
                            />
                            <br />
                            <div className='buttons form-group'>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => {
                                        setSelectedButton(filed.type);
                                        setHelperText(filed.helperText);
                                        setPlaceholder(filed.placeholder);
                                        setIsRequired(filed.required);
                                        setTitle(filed.title);
                                        setdata(filed.data);
                                        // setOption(filed.option)

                                        dispatch({
                                            type: 'UPDATE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Edit
                                </button>
                                <button
                                    className='btn btn-danger ml-2'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                if (filed.type === 'number')
                    return (
                        <div key={filed.id}>
                            <Number
                                title={filed.title}
                                placeholder={filed.placeholder}
                                helperText={filed.helperText}
                            />
                            <br />
                            <div className='buttons form-group'>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => {
                                        setSelectedButton(filed.type);
                                        setHelperText(filed.helperText);
                                        setPlaceholder(filed.placeholder);
                                        setIsRequired(filed.required);
                                        setTitle(filed.title);
                                        setdata(filed.data);
                                        // setOption(filed.option)

                                        dispatch({
                                            type: 'UPDATE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Edit
                                </button>
                                <button
                                    className='btn btn-danger ml-2'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                if (filed.type === 'date')
                    return (
                        <div key={filed.id}>
                            <Date
                                title={filed.title}
                                helperText={filed.helperText}
                                defaultDate={filed.defolt}
                            />
                            <br />
                            <div className='buttons form-group'>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => {
                                        setSelectedButton(filed.type);
                                        setHelperText(filed.helperText);
                                        setPlaceholder(filed.placeholder);
                                        setIsRequired(filed.required);
                                        setTitle(filed.title);
                                        setdata(filed.data);
                                        // setOption(filed.option)

                                        dispatch({
                                            type: 'UPDATE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Edit
                                </button>
                                <button
                                    className='btn btn-danger ml-2'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                if (filed.type === 'tel')
                    return (
                        <div key={filed.id}>
                            <Phone
                                title={filed.title}
                                helperText={filed.helperText}
                                placeholder={filed.placeholder}
                            />
                            <br />
                            <div className='buttons form-group'>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => {
                                        setSelectedButton(filed.type);
                                        setHelperText(filed.helperText);
                                        setPlaceholder(filed.placeholder);
                                        setIsRequired(filed.required);
                                        setTitle(filed.title);
                                        setdata(filed.data);
                                        // setOption(filed.option)

                                        dispatch({
                                            type: 'UPDATE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Edit
                                </button>
                                <button
                                    className='btn btn-danger ml-2'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                if (filed.type === 'radio') {
                    return (
                        <div key={filed.id}>
                            <Radio
                                title={filed.title}
                                helperText={filed.helperText}
                                data={filed.data}
                            />
                            <br />
                            <div className='buttons form-group'>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => {
                                        setSelectedButton(filed.type);
                                        setHelperText(filed.helperText);
                                        setPlaceholder(filed.placeholder);
                                        setIsRequired(filed.required);
                                        setTitle(filed.title);
                                        setdata(filed.data);
                                        // setOption(filed.option)

                                        dispatch({
                                            type: 'UPDATE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Edit
                                </button>
                                <button
                                    className='btn btn-danger ml-2'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_INPUT',
                                            payload: filed.id,
                                        });
                                    }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default OutputContainer;
