import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 10px solid #99a;
border-radius: 10px;
& h4 {padding:.5rem; background-color: rgba(51,51,51,.3);}
& ul.boxlist {display:flex; flex-wrap:wrap; margin:0;padding:0;}
& ul.boxlist li {list-style-type:none; margin:.1rem .2rem; background-color: rgba(200,200,200,.1);}
& a {display:block;}
`;

const Europa = () => {
    return (
        <StyledDiv>
            <h4>Europa</h4>

            <ul className="boxlist">
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/albania">Albania</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/bulgaria">Bułgaria</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/chorwacja">Chorwacja</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/jugoslawia">Jugosławia</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/serbia">Serbia</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/slowacja">Słowacja</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/rumunia">Rumunia</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/wegry">Węgry</Link></li>
            </ul>

        </StyledDiv>
    )
}

export default Europa