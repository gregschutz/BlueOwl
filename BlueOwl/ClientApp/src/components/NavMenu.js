import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';

export default function NavMenu({ cards }) {
    const [card, setCards] = useState([cards]);

    const number = Math.floor(Math.random() * 100) + 1;   

    function addCard(event) {

        setCards(prevCards => {
            return [...prevCards, { number: number, visible: true}]
        });
    }

    function sortCard(event) {

        setCards(prevCards => {
            return [...prevCards, { number: number, visible: true }]
        });
    }

 
    return (
      <header>
        <Navbar id="header" className="navbar-expand-sm navbar-toggleable-sm  border-bottom box-shadow">
                <button id="btnAdd" onClick={ addCard } className="btn btn-warning mr-2">Add Card</button>
                <button id="btnSort" onClick={ sortCard } className="btn btn-warning">Sort Cards</button>
        </Navbar> 
      </header>
    );
}
