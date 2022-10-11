import './styles.css';
export default function CardsOffers({ provedora, megas, preco }) {
    return (
        <div className='container-cards-offers'>
            <h1>{provedora}</h1>
            <p>{megas}</p>
            <p>R$ {preco}</p>

            <button className="btn-offers">Comprar</button>

        </div >
    )
}