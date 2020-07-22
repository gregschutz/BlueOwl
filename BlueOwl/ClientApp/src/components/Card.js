import React, { useState } from 'react';

export default function Card({ cards }) {
    const [card, removeCard] = useState(cards);

    const deleteCard = () => {
        //remove card
        //let thiscard = document.getElementsByClassName('card-text');
        //alert(card.length);
        //let c = card.filter((n) => parseInt(n.number) !== parseInt(num));
        //removeCard([...c]);

    }

    const renderCard = () => {
        if (cards.visible) {
            return (
                <div id="card"  className="card mt-4 mr-4">
                    <div className="card-header d-flex">
                        <span className="flex-fill">Title</span>
                        <button className="btn btn-sm btn-secondary d-inline-block justify-content-end" onClick={deleteCard}>X</button>
                    </div>
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <h2 className="card-text">{cards.number}</h2>
                    </div>
                </div>
            )
        }
    }

         
    return (
        <div>{renderCard()}</div>
    );
}