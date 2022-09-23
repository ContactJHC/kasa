import '../styles/IndexCards.css'
import data from '../logements.json'

function cardsFactory(titre) {
    return (
        <div className='card'>
            <p>{titre}</p>
        </div>
    )
}

function IndexCards() {
    return(
        <div id='cardsContainer'>
            {data.map((oneLocation) => (
                cardsFactory(oneLocation.title)
            ))}
        </div>
    )
}

export default IndexCards