import { getItem } from './storage';
import { useState } from 'react'
import { Outlet, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offers from './pages/Offers';
import UserContext from './context/UserContext';

export default function MainRouters() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [uf, setUf] = useState('');

    const valuesProvider = { nome, setNome, telefone, setTelefone, cep, setCep, logradouro, setLogradouro, bairro, setBairro, localidade, setLocalidade, uf, setUf }
    function ProtectedRoutes({ redirectTo }) {
        const isAuthenticated = getItem('cep');
        return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
    }

    return (
        <UserContext.Provider value={valuesProvider} >
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />

                <Route element={<ProtectedRoutes redirectTo='/' />}>
                    <Route
                        exact path='/offers'
                        element={<Offers />}
                    />
                </Route>
            </Routes>
        </UserContext.Provider>
    )
}