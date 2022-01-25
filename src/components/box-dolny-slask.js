import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 10px solid #cc6;
border-radius: 10px;
margin:1rem;
& ul {display:flex; flex-wrap:wrap;}
& li {list-style-type:none; margin:2px; background-color: rgba(200,200,200,.1);}
& a {display:block;}
`;

const BoxDolnySlask = () => {
    return (
        <StyledDiv>
            <p>Artykuły związane z Dolnym Śląskiem</p>

            <ul>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/adolf-bertram">Adolf Bertram</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/hanna-reitsch">Hanna Reitsch</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/depesza-eisenhowera">Depesza Eisenhowera (SCAF 252)</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/gross-rosen">KL Groß-Rosen</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/grupa-drobnera">Grupa Drobnera</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/klasztor-augustianow">Klasztor Augustianow</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/wojsko-dlnslask">Wojsko na Dolnym Śląsku</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/zoo">Zoo</Link></li>
            </ul>

        </StyledDiv>
    )
}

export default BoxDolnySlask