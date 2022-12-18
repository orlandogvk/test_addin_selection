import { React, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signIn } from '../redux/features/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { token } = useSelector((state) => state.users.users)
    
    // Custom notifications
    const notifyPlacaError = () => toast.error('User not exist, please register now!', { autoClose: 3000 })
    
    useEffect(() => {
        if(token){
            navigate('/dashboard')
        }
    }, [token]);

    const onSubmit = (data) => {
        const { email, password } = data
        if (!email || !password) return notifyPlacaError();
        dispatch(signIn(data))
        reset()
    }

    return (

        <>
            <Container className='mt-5'>
                <Row className="justify-content-center">
                    <Col sm={3}>
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control {...register("email", { required: true, maxLength: 20 })} type="email" placeholder="Enter email" />
                                {errors.email?.type === 'required' && (
                                    <small className="fail">Email empty</small>
                                )}
                                {errors.email?.type === 'maxLength' && (
                                    <small className="fail">Email not valid</small>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control {...register("password", { required: true, maxLength: 10 })} type="password" placeholder="Password" />
                                {errors.password?.type === 'required' && (
                                    <small className="fail">Password empty</small>
                                )}
                                {errors.password?.type === 'maxLength' && (
                                    <small className="fail">Password max 10 caracters</small>
                                )}
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <ToastContainer theme="colored" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </>


    )
}
