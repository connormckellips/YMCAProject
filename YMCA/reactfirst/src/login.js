import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {authenticateLogin} from './authenticateLogin';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const successfulLogin = await handleFormSubmit({email, password});
        if (successfulLogin) {
            navigate('/programView');
        }
    };
    
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

async function handleFormSubmit(formData) {
    try {
        const successfulLogin = await authenticateLogin(formData.email, formData.password);
        return successfulLogin;
    } catch (error) {
        console.error('Login failed:', error);
        return false;
    }
}

export default Login;