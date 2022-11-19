import React from 'react';
import { FormItem, FormText } from './FormElement';
import { useState } from 'react';

function Form(props) {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [FunFact, setFunFact] = useState('');

    const handleSubmit = event => {
        alert('Successfully submitted the form!')
        event.preventDefault();

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://hack-tech-app-endpoint.herokuapp.com/test?email=${Email}&funfact=${FunFact}&name=${Name}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result));

        setName('')
        setEmail('')
        setFunFact('')
    };
    return <form onSubmit={handleSubmit} className="form">
        <h4 className="header">{props.className}</h4>
        <FormItem
            onChange={event => setName(event.target.value)}
            id="name" type="text"
            placeholder="Name" name="name" value={Name} />
        <FormItem
            onChange={event => setEmail(event.target.value)}
            id="email" type="email"
            placeholder="Email" name="email" value={Email} />
        <FormText
            onChange={event => setFunFact(event.target.value)}
            id="funFact" type="funFact"
            placeholder="Fun Fact" name="funFact" value={FunFact} />
        <button
            className="button " type="submit">Submit
        </button>
    </form>
}

export { Form }