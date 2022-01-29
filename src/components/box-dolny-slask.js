import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 10px solid #cc6;
border-radius: 10px;
& h4 {padding:.5rem; background-color: rgba(51,51,51,.3);}
& ul.boxlist {display:flex; flex-wrap:wrap; margin:0;padding:0;}
& ul.boxlist li {list-style-type:none; margin:.1rem .2rem; background-color: rgba(200,200,200,.1);}
& a {display:block;}
`;

const BoxDolnySlask = () => {
    return (
        <StyledDiv>
            <h4>Artykuły związane z Dolnym Śląskiem</h4>

            <ul className="boxlist">
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/klasztor-augustianow">Klasztor augustianów na Wyspie Piaskowej</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/zoo">Wrocławski Ogród Zoologiczny (1865 - 1945)</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/wojsko-dlnslask">Wojsko na Dolnym Śląsku 1818-1945</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/adolf-bertram">Biskup Adolf Bertram (1859-1945)</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/hanna-reitsch">Kapitan Hanna Reitsch (1912-79)</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/depesza-eisenhowera">Depesza Eisenhowera (SCAF 252)</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/kl-gross-rosen">Obóz koncentracyjny Groß-Rosen (1940-45)</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/grupa-drobnera">Grupa Drobnera</Link></li>
            </ul>

        </StyledDiv>
    )
}

export default BoxDolnySlask