import * as React from 'react'
import { Link } from 'gatsby'
import MenuNav from "./menu_nav"

const MenuMain = ( ) => {
    return (
        <MenuNav>
            <ul>
                <li><Link to='/' activeClassName="active">Strona główna</Link></li>
                <li><Link to='/turystyka' activeClassName="active" partiallyActive={true}>/Turystyka</Link></li>
                <li><Link to='/it' activeClassName="active" partiallyActive={true}>/IT</Link></li>
                <li><Link to='/misc' activeClassName="active" partiallyActive={true}>/Misc</Link></li>
                <li><Link to='/kontakt' activeClassName="active">Kontakt</Link></li>
            </ul>
        </MenuNav>
    )
}
export default MenuMain