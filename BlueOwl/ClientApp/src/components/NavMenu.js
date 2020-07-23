import React, { useContext } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { GlobalContext } from './GlobalContext';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';

export default function NavMenu({ cards }) {
    const [card, setCards] = useContext(GlobalContext);

    const number = Math.floor(Math.random() * 100) + 1;   

    const addCard = () => {

        setCards([...card, {
            number: number,
            visible: true
        }])
    }

    const sortCard = () => {
        //sort cards, then save to useState
        card.sort((a, b) => (a.number > b.number) ? 1 : -1);
        setCards([...card]);
    }

 
    return (
      <header>
        <Navbar id="header" className="navbar-expand-sm navbar-toggleable-sm  border-bottom box-shadow p-3">
                <button id="btnAdd" onClick={ addCard } className="btn btn-warning mr-2">Add Card</button>
                <button id="btnSort" onClick={ sortCard } className="btn btn-warning">Sort Cards</button>
        </Navbar> 
      </header>
    );
}

