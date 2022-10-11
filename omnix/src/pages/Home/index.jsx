import { useContext, useState } from 'react';
import api from '../../service';
import { setItem } from '../../storage'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext';
import './styles.css';

export default function Home() {
    const { nome, setNome, telefone, setTelefone, cep, setCep, logradouro, setLogradouro, bairro, setBairro, localidade, setLocalidade, uf, setUf } = useContext(UserContext);


    const navigate = useNavigate();



    async function onBlurCep(e) {

        if (cep.length != 8) {
            alert('Cep inválido')
            return;
        }
        try {
            const { data } = await api.get(`${cep}/json/`);
            console.log(data);

            setBairro(data.bairro)
            setLocalidade(data.localidade)
            setLogradouro(data.logradouro)
            setUf(data.uf)
        } catch (error) {
            console.log(error.message);
        }

    }
    async function handleSubmit(e) {
        e.preventDefault();


        setItem('cep', cep);
        navigate('/offers')
    }

    return (
        <div className='container'>
            <h1 className='container-home-h1'>Seja muito bem-vindo(a)! </h1>
            <h2 className='container-home-h2'>Preencha o formulário para conferir as ofertas do dia da sua localidade</h2>
            <form onSubmit={handleSubmit}>
                <input
                    id='nome'
                    name='nome'
                    className='inputs'
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    id='telefone'
                    name='telefone'
                    className='inputs'
                    type="number"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required />

                <input
                    id='cep'
                    name='cep'
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className='inputs'
                    type="text"
                    placeholder="CEP"
                    required
                    onBlur={onBlurCep}
                />
                <input
                    id='logradouro'
                    name='logradouro'
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                    className='inputs'
                    type="text"
                    placeholder="Logradouro"
                    required
                />
                <input
                    id='localidade'
                    name='localidade'
                    value={localidade}
                    onChange={(e) => setLocalidade(e.target.value)}
                    className='inputs'
                    type="text"
                    placeholder="Localidade"
                    required
                />
                <input
                    id='bairro'
                    name='Bairro'
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    className='inputs'
                    type="text"
                    placeholder="Bairro"
                    required
                />
                <input
                    id='uf'
                    name='uf'
                    value={uf}
                    onChange={(e) => setUf(e.target.value)}
                    className='inputs'
                    type="text"
                    placeholder="UF"
                    required
                />

                <button >Próximo</button>
            </form>
        </div>
    )
}