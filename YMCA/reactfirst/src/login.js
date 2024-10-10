import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {authenticateLogin} from './authenticateLogin';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleFormSubmit({email, password});
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="loginInfo">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type = "email" 
                    placeholder="name@example.com" 
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="loginInfo">
                <Form.Label> Password </Form.Label>
                <Form.Control 
                    type = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
}

function handleFormSubmit(formData) {
    const successfulLogin = authenticateLogin(formData.email, formData.password);
    console.log(successfulLogin);
}

export default Login;