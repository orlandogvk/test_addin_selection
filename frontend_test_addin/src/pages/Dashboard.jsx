import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const Dashboard = () => {
    const { name } = useSelector((state) => state.users.users)

    return (
        <h1>Hello {name} welcome to your dashboard</h1>
    )
}
