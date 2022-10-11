import './styles.css'
import UserContext from '../../context/UserContext'
import { useContext } from 'react'
export default function CardInfoCep() {
    const { cep, logradouro, bairro, localidade, uf } = useContext(UserContext)

    return (
        <div className="container-card-info">
            <h5>CEP: {cep}</h5>
            <h5>Logradouro: {logradouro}</h5>
            <h5>Bairro:{bairro}</h5>
            <h5>Localidade: {localidade}</h5>
            <h5>UF: {uf}</h5>
        </div>
    )
}