import React from 'react'
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signIn } from '../redux/features/auth/thunk';
import { useDispatch } from 'react-redux'

export const Login = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, getValues } = useForm();
    const onSubmit = (data) => {
        //console.log(data)
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
                                <Form.Control {...register("email")} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control {...register("password")} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button onClick={() => dispatch(signIn({email:getValues('email'), password:getValues('password')}))} variant="primary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>


    )
}
