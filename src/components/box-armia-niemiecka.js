import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 10px solid #4d5d53;
border-radius: 10px;
margin:1rem;
& ul {display:flex; flex-wrap:wrap;}
& li {list-style-type:none; margin:2px; background-color: rgba(200,200,200,.1);}
& a {display:block;}
`;

const MenuArmiaNiemiecka = () => {
    return (
        <StyledDiv>
            <p>Artykuły dotyczące armii niemieckiej:</p>

            <ul>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/armia-niemiecka">Armia niemiecka 1918-45</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/wojsko-dlnslask">Wojsko na Dolnym Śląsku 1818-1945</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/ss">SS</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/volkssturm">Volkssturm</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/wunderwaffe">Wunderwaffe</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/vergeltungswaffe">Vergeltungswaffe od V1 do V4 / Broń Zemsty</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/front-niemiecki-1945">Front niemiecki w Polsce w 1945</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/ostfront">Ostfront, czyli o przyczynie wojny na wschodzie</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/werner-molders">Podpułkownik Werner Mölders (1913-41)</Link></li>
            </ul>

        </StyledDiv>
    )
}

export default MenuArmiaNiemiecka