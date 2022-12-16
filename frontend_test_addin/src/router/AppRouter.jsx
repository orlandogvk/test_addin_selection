import { Routes, Route } from 'react-router-dom'
import { Navbarc } from '../components/navbar/Navbar.jsx'
import { Home, Dashboard, Login, Register } from '../pages';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navbarc />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
}
