import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 10px solid #4d5d53;
border-radius: 10px;
& h4 {padding:.5rem; background-color: rgba(51,51,51,.3);}
& ul.boxlist {display:flex; flex-wrap:wrap; margin:0;padding:0;}
& ul.boxlist li {list-style-type:none; margin:.1rem .2rem; background-color: rgba(200,200,200,.1);}
& a {display:block;}
`;

const MenuArmiaNiemiecka = () => {
    return (
        <StyledDiv>
            <h4>Artykuły dotyczące armii niemieckiej:</h4>

            <ul className="boxlist">
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/armia-niemiecka">Armia niemiecka 1918-45</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/wojsko-dlnslask">Wojsko na Dolnym Śląsku 1818-1945</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/ss">SS</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/volkssturm">Volkssturm</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/wunderwaffe">Wunderwaffe</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/wunderwaffe-lotnictwo">Wunderwaffe - lotnictwo</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/wunderwaffe-rakiety">Wunderwaffe - rakiety</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/vergeltungswaffe">Vergeltungswaffe (Broń Zemsty) V1 - V4</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/front-niemiecki-1945">Front niemiecki w Polsce w 1945</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/ostfront">Ostfront, czyli o przyczynie wojny na wschodzie</Link></li>
                <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/werner-molders">Podpułkownik Werner Mölders (1913-41)</Link></li>
            </ul>

        </StyledDiv>
    )
}

export default MenuArmiaNiemiecka