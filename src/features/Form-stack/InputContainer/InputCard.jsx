import React, { useState, useContext } from 'react';
import { FormContext } from '../Context/context';
import shortid from 'shortid';

export default function InputCard({
    type,
    setSelectedButton,
    title,
    setTitle,
    placeholder,
    setPlaceholder,
    helperText,
    setHelperText,
    option,
    setOption,
    isRequired,
    setIsRequired,
    data,
    setdata,
}) {
    let [isEditable, setisEditable] = useState(false);
    let [editableOption, seteditableOption] = useState(null);
    let { state, dispatch } = useContext(FormContext);

    // const deletefiled = (id) => {};

    let obj = {
        // id: shortid.generate(),
        type,
        title,
        placeholder,
        helperText,
        isRequired,
        data,
    };
    const addField = () => {
        option.length > 0 &&
            setdata((prev) => [
                ...prev,
                { id: shortid.generate(), field: option },
            ]);
        setOption('');
    };

    const handleSubmit = (e) => {
        console.log('I am clicked');
        e.preventDefault();
        let obj = {
            id: shortid.generate(),
            type,
            title,
            placeholder,
            helperText,
            isRequired,
            data,
        };

        dispatch({
            type: 'ADD_INPUT',
            payload: obj,
        });
        setSelectedButton(null);
        setTitle('');
        setPlaceholder('');
        setHelperText('');
        setIsRequired(false);
        setOption('');
        setdata([]);
    };
    // const updateStudent = (e) => {
    //     e.preventDefault();

    //     // let obj = {
    //     //     // id: shortid.generate(),
    //     //     type,
    //     //     title,
    //     //     placeholder,
    //     //     helperText,
    //     //     isRequired,
    //     //     data,
    //     // };
    //     let { formData, editableInput } = state;
    // };
    //    console.log(props);
    return (
        <div>
            <form
                // onSubmit={handleSubmit}
                className='mt-3 border border-primary p-3'>
                <div className='lead text-center text-bold'>
                    {!state.editable ? 'Add' : 'Update'} {type}
                </div>
                <input
                    type='text'
                    className='form-control mt-2'
                    value={title}
                    title={title}
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className='form-control mt-2'
                    type='text'
                    placeholder='Placeholder Text'
                    value={placeholder}
                    onChange={(e) => setPlaceholder(e.target.value)}
                />

                <textarea
                    placeholder='Helper Text'
                    title={helperText}
                    value={helperText}
                    onChange={(e) => setHelperText(e.target.value)}
                    cols='5'
                    className='form-control mt-2'
                    rows='2'></textarea>

                <div className='input-group mt-2 d-flex align-items-center'>
                    <label>Required? </label>
                    <input
                        value={isRequired}
                        onChange={() => setIsRequired((prev) => !prev)}
                        className='ml-2'
                        type='checkbox'
                    />
                </div>
                {type === 'radio' || type === 'checkbox' ? (
                    <div>
                        <input
                            type='text'
                            value={option}
                            onChange={(e) => setOption(e.target.value)}
                            className='form-group'
                        />
                        <button
                            className='btn btn-primary ml-2'
                            type='button'
                            onClick={
                                !isEditable
                                    ? addField
                                    : (e) => {
                                          e.preventDefault();
                                          let dd = data.find(
                                              (ddd) => ddd.id === editableOption
                                          );

                                          dd.field = option;
                                          setdata(data);
                                          setOption('');
                                          setisEditable(false);
                                          seteditableOption(null);
                                          //   seteditableOption(null);
                                      }
                            }>
                            {isEditable ? 'update' : '+'}
                        </button>
                        <div className='list-group'>
                            {data &&
                                data.map((d) => (
                                    <div className='list-group-item' key={d.id}>
                                        <li
                                            // key={d.id}
                                            className='list-inline-item '>
                                            {d.field}
                                        </li>
                                        <button
                                            onClick={() => {
                                                if (editableOption === d.id) {
                                                    setisEditable(false);
                                                    seteditableOption(null);
                                                }
                                                // let dat = data.find(da => da.id === d.id);
                                                let date = data.filter(
                                                    (da) => da.id !== d.id
                                                );
                                                setdata(date);
                                            }}
                                            className='inline-block'
                                            style={{
                                                float: 'right',
                                            }}>
                                            X
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setisEditable(true);
                                                seteditableOption(d.id);
                                                setOption(d.field);

                                                // setisEditable(true);
                                                // seteditableOption(d.id);
                                                // setOption(d.field);
                                                // d.field = option;
                                            }}
                                            style={{
                                                float: 'right',
                                                marginRight: '5px',
                                            }}>
                                            Edit
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <div>
                    <button
                        onClick={
                            !state.editable
                                ? handleSubmit
                                : (e) => {
                                      e.preventDefault();
                                      dispatch({
                                          type: 'UPDATE_REALLY',
                                          payload: obj,
                                      });
                                      setSelectedButton(null);
                                      setTitle('');
                                      setPlaceholder('');
                                      setHelperText('');
                                      setIsRequired(false);
                                      setOption('');
                                      setdata([]);
                                      //   setisEditable(false);
                                      //   seteditableOption(null);
                                  }
                        }
                        type='submit'
                        className='btn btn-dark mr-2 mt-2'>
                        {!state.editable ? 'ADD INPUT' : 'UPDATE INPUT'}
                    </button>
                    <button
                        onClick={() => setSelectedButton(null)}
                        className='btn btn-dark mr-2 mt-2'>
                        CANCEL
                    </button>
                    {/* <button type='reset'>RESET</button> */}
                </div>
            </form>
        </div>
    );
}
