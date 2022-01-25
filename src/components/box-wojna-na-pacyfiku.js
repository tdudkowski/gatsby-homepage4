import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 10px solid #00a;
border-radius: 10px;
margin:1rem;
& ul {display:flex; flex-wrap:wrap;}
& li {list-style-type:none; margin:2px; background-color: rgba(200,200,200,.1);}
& a {display:block;}
`;

const WojnaNaPacyfiku = () => {
    return (
        <StyledDiv>
            <p>Wojna na Pacyfiku</p>

            <ul>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/japonia-opis">Japonia - opis</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/japonia-1937-44">1937-44</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/japonia-1945">1945</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/japonia-bron">Broń podczas wojny na Pacyfiku</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/japonia-usa">Podsumowanie</Link></li>
            </ul>

        </StyledDiv>
    )
}

export default WojnaNaPacyfiku