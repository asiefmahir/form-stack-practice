import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ContextProvider } from '../Context/context';
import InputContainer from '../InputContainer';
import OutPutContainer from '../OutputContainer';

export default function App() {
    const [title, setTitle] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [helperText, setHelperText] = useState('');
    const [option, setOption] = useState('');
    const [isRequired, setIsRequired] = useState(false);
    let [selecTedButton, setSelectedButton] = useState(null);
    const [data, setdata] = useState([]);
    return (
        <ContextProvider>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col'>
                        <h2>Input Field</h2>
                        <InputContainer
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
                            selecTedButton={selecTedButton}
                            setSelectedButton={setSelectedButton}
                        />
                    </div>
                    <div className='col'>
                        <OutPutContainer
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
                            selecTedButton={selecTedButton}
                            setSelectedButton={setSelectedButton}
                        />
                    </div>
                </div>
            </div>
        </ContextProvider>
    );
}
