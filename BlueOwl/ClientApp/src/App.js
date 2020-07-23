import React, { useState } from 'react';
import { r } from 'react-router';
import { GlobalContext } from './components/GlobalContext';
import NavMenu from './components/NavMenu';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';

import './css/custom.css';

function App() {
    const [cards, setCards] = useState([]); //default card values

    


    return (
        <GlobalContext.Provider value={[cards, setCards]} >
            <NavMenu />        
            <CardContainer key={cards.length} cards={cards}  />
            <Footer />   
        </GlobalContext.Provider>
    );
}

export default App;

    