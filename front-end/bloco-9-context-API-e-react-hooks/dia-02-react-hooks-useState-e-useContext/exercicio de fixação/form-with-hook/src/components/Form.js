import React from 'react';
import { useState, useContext } from 'react';
import FormContext from '../context/FormContext';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [module, setModule] = useState();

    const { addData } = useContext(FormContext);

    const handleClick = (event) => {
        event.preventDefault();
        const personalInfo = {
            name,
            age,
            city,
            module,
        }
        addData(personalInfo);
    }

    return(
        <form>
            <fieldset>
                <legend>
                    DADOS PESSOAIS
                </legend>
                <br />
                <label htmlFor="name">
                    Nome completo
                    <input 
                        type="text"
                        id="name"
                        value={ name }
                        onChange={ ({target}) => setName(target.value) }
                    />
                </label>
                <br />
                <label htmlFor="age">
                    Idade
                    <input 
                        type="number"
                        id="age"
                        value={ age }
                        onChange={ ({target}) => setAge(target.value) }
                    />
                </label>
                <br />
                <label htmlFor="city">
                    Cidade
                    <input 
                        type="text"
                        id="city"
                        value={ city }
                        onChange={ ({target}) => setCity(target.value) }
                    />
                </label>
                <br />
            </fieldset>
            <fieldset>
                <legend>
                    MÓDULO
                </legend>
                <label htmlFor="fundamentals">
                    Fundamentos
                    <input
                        type="radio"
                        id="fundamentals"
                        name="module"
                        value="Fundamentos"
                        checked={ module === 'Fundamentos' }
                        onChange={ ({ target }) => setModule(target.value) }
                    />
                </label>
                <br />
                <label htmlFor="frontend">
                    Front-end
                    <input
                        type="radio"
                        id="frontend"
                        name="module"
                        value="Front-end"
                        checked={ module === 'Front-end' }
                        onChange={ ({ target }) => setModule(target.value) }
                    />
                </label>
                <br />
                <label htmlFor="backend">
                    Back-end
                    <input
                        type="radio"
                        id="backend"
                        name="module"
                        value="Back-end"
                        checked={ module === 'Back-end' }
                        onChange={ ({ target }) => setModule(target.value) }
                    />
                </label>
                <br />
                <label htmlFor="cs">
                    Ciência da computação
                    <input
                        type="radio"
                        id="cs"
                        name="module"
                        value="Ciência da computação"
                        checked={ module === 'Ciência da computação' }
                        onChange={ ({ target }) => setModule(target.value) }
                    />
                </label>
            </fieldset>
            <button
                type="submit"
                onClick={ handleClick }
            >
                ENVIAR
            </button>
        </form>
    );
}

export default Form;