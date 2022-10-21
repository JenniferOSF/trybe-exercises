import React from 'react';
import { useContext } from 'react';
import FormContext from '../context/FormContext';

function StudentInfo(){
    const { data } = useContext(FormContext);
    return(
        <ul>
            { data.map((student, index) => (
                <li key={ index }>
                    <p>
                        { `Nome: ${student.name}` }
                    </p>
                    <p>
                        { `Idade: ${student.age}` }
                    </p>
                    <p>
                        { `Cidade: ${student.city}` }
                    </p>
                    <p>
                        { `Módulo: ${student.module}` }
                    </p>
                </li>
            ))}
        </ul>
    );
}

export default StudentInfo;
