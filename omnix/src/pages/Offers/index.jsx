import CardInfoCep from "../../components/CardInfoCep"
import CardsOffers from "../../components/CardsOffers"
import { useNavigate } from 'react-router-dom'
import { removeItem } from '../../storage'
import UserContext from "../../context/UserContext"
import './styles.css'
import { useContext } from "react"
export default function Offers() {
    const { cep } = useContext(UserContext);
    const navigate = useNavigate();
    const ofertas = [
        {
            id: 1,
            provedora: 'Vivo',
            megas: '300 Megas',
            preco: 109.99
        },
        {
            id: 2,
            provedora: 'Oi',
            megas: '400 Megas',
            preco: 99.90
        },
        {
            id: 3,
            provedora: 'Telecom',
            megas: '800 Megas',
            preco: 84.90
        }
    ]

    async function handleLogout() {
        removeItem('cep', cep);
        navigate("/");
    }
    return (

        <div className="container-offers">
            <div className="container-info">
                <CardInfoCep />
            </div>
            <div className="container-cards">
                {ofertas.map(item => (
                    <div className="cards-offers" key={item.id}>
                        <CardsOffers
                            provedora={item.provedora}
                            megas={item.megas}
                            preco={item.preco}
                        />

                    </div>
                ))}
            </div>
            <button onClick={handleLogout} className='btn'>Ops, errei meu cep!</button>
        </div>
    )
}