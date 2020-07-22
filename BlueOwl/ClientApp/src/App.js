import React, { useState } from 'react';
import { r } from 'react-router';
//import  Layout  from './components/Layout';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';

import './css/custom.css';

function App() {
    const [cards, setCards] = useState([]); //default card values

    const addCard = () => {

        setCards([...cards, {
            number: Math.floor(Math.random() * 100) + 1,
            visible: true
        }])
    }

    const sortCard = () => {
        //sort cards, then save to useState
        cards.sort((a, b) => (a.number > b.number) ? 1 : -1);
        setCards([...cards]);
    }

    return (
        <>
            <header>
                <div id="header" className="navbar-expand-sm navbar-toggleable-sm  border-bottom box-shadow p-3">
                    <button id="btnAdd" onClick={addCard} className="btn btn-link mr-2">Add Card</button>
                    <button id="btnSort" onClick={sortCard} className="btn btn-link">Sort Cards</button>
                </div>
            </header>
        
            <CardContainer key={cards.length} cards={cards} />
            <Footer />   
        </>
    );
}

export default App;

    