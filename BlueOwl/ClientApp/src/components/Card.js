import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';


export default function Card({ card }) {
    const [cards, setCards] = useContext(GlobalContext);


    const deleteCard = (num) => {
        //remove card
        
        //alert(num);
        //console.log('this is a card: ' + cards.length);
        let c = cards.filter((n) => parseInt(n.number) !== parseInt(num));
        setCards([...c]);

    }

    const renderCard = () => {
        if (card.visible) {
            return (
                <div id="card"  className="card mt-4 mr-4">
                    <div className="card-header d-flex">
                        <span className="flex-fill">Title</span>
                        <button id={card.number} className="btn btn-sm btn-secondary d-inline-block justify-content-end" onClick={(e) => deleteCard(e.target.id)}>X</button>
                    </div>
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <h2 className="card-text">{card.number}</h2>
                    </div>
                </div>
            )
        }
    }

         
    return (
        <div>{renderCard()}</div>
    );
}