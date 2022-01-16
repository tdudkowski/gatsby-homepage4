import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  background-color: rgba(80,0,20,.9);
  border-radius:10px 10px 0 0;
& hr {border-color: rgba(80,0,20,.1); color: rgba(80,0,20,.1);} 
& a {color: #ffd;}
& ul {display:flex; flex-direction: column; padding-left:0; margin:0 auto;}
& ul li {list-style-type:none; flex:1;}
& ul li a {display:block; text-align:center; text-decoration:none; padding:10px 2rem;}
& ul li a:hover {text-decoration:underline;}
& div {text-align:center; margin:0; padding:1rem; background-color: rgba(150,150,150,.3);}
  @media (min-width: 900px) {& ul { flex-direction:row;}}
`;

const Footer = () => {

    return (
        <StyledFooter className="footer">
            <hr />
            <nav>
                <ul>
                    <li><Link to="/">/home</Link></li>
                    <li><Link to="/turystyka">/turystyka</Link></li>
                    <li><Link to="/it">/IT</Link></li>
                    <li><Link to="/misc">/misc</Link></li>
                </ul>
            </nav>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/o-mnie">O mnie</Link></li>
                        <li><Link to="/o-stronie">O stronie</Link></li>
                        <li><Link to="/sitemap">Mapa strony</Link></li>
                        <li><Link to="/hosting">Hosting (MyDevil.net)</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>

                    </ul>
                </nav>

                Wszystkie prawa zastrzeżone. Strona wykonana w <a href="https://www.gatsbyjs.com/">Gatsby v4</a> @2022; hosting: <a href="https://www.netlify.com/">Netlify</a>
            </div>
        </StyledFooter>)
}
export default Footer