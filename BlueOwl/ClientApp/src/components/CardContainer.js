import React from 'react';
import Card from './Card';

export default function CardContainer({ cards }) {

    return (
        
            <div>
                <div className="d-flex">
                    <div id="sectionCard" className="p-4 justify-content-start flex-fill">
                        <div className="row">
                        <div className="col-12 d-flex justify-content-start flex-wrap">
                            {
                                cards.map(card => {
                                    return (
                                        <Card key={card.number} card={card} />
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                    <div id="sectionInstructions" className="justify-content-end p-3">
                        <h4>Instructions</h4>
                        <ol className="mt-4">
                            <li>Click the add card button to add a new card to the page.</li>
                            <li>Click the sort card button to sort the cards by their numbers.</li>
                            <li>....</li>
                        </ol>
                    </div>
                </div>
            </div>
    )
}