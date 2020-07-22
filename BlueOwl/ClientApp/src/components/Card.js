import React from 'react';

export default function Card({ cards }) {

    const renderCard = () => {
        if (cards.visible) {
            return (
                <div id="card" className="card mt-4 mr-4">
                    <div className="card-header">Title</div>
                    <div className="card-body">
                        <h4 className="card-text text-center">{cards.number}</h4>
                    </div>
                </div>
            )
        }
    }

         
    return (
        <div>{renderCard()}</div>
    );
}