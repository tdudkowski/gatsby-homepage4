import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 10px solid #00a;
border-radius: 10px;
& h4 {padding:.5rem; background-color: rgba(51,51,51,.3);}
& ul.boxlist {display:flex; flex-wrap:wrap; margin:0;padding:0;}
& ul.boxlist li {list-style-type:none; margin:.1rem .2rem; background-color: rgba(200,200,200,.1);}
& a {display:block;}
`;

const WojnaNaPacyfiku = () => {
    return (
        <StyledDiv>
            <h4>Wojna na Pacyfiku</h4>

            <ul className="boxlist">
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/pacyfik-japonia">Japonia - opis</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/pacyfik-1937-44">1937-44</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/pacyfik-1945">1945</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/pacyfik-iwo-jima">Bitwa o Iwo Jimę</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/pacyfik-bron">Broń podczas wojny na Pacyfiku</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/pacyfik-yanagi">Misje Yanagi</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/pacyfik-podsumowanie">Podsumowanie</Link></li>
            </ul>

        </StyledDiv>
    )
}

export default WojnaNaPacyfiku