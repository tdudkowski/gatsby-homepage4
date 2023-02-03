import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import HeaderStandard from "./header-standard"
import FooterStandard from './footer-standard'
import ToC from "./toc"
import "./layout-fb.css"
import "./layout.css"

const StyledHeader = styled.header`

       & a > h2 {margin:0; font-size:3.5rem; text-align:center; overflow:hidden; font-family:Alegreya, sans-serif; background-color: rgba(250, 250, 250, .05); color: rgba(250,250,250,.6);}
  `;

const StyledMain = styled.main`
display:flex;
flex-direction: column;
  article {padding:.5rem;}
  blockquote {color: #443; font-style: oblique; position:relative;}
  blockquote::before {position: absolute;
    content: '"';
    /* content: open-quote; */
    //color: rgba(255, 238, 204, .5);
    color: rgba(55, 38, 4, .8);
    left: -2rem;
    top:-1rem;
    font-size: 4rem;
    width:50px;
    font-style: italic;
    margin-left:-0.5rem;}
  & article {background: url(${props => props.background}) no-repeat 80% 3rem; background-size:50px; overflow-x:hidden;}
  & article h2 { font-family:Alegreya, sans-serif; font-size:2.5rem; color:#333; background-color: rgba(255,255,255,.9); display:inline-block;}
  & article h2 span {font-size:3rem; color:#666; border-bottom:3px dotted #666;}
  & article h3 { font-family:Alegreya, sans-serif; border-bottom:1px solid #ddc; margin: 2rem 0; font-size:2rem; color:#444;}
  & article h4 { font-size:1.3rem; color:#110;}
  & article h5 { font-size:1rem; color:#221;}
  /* & article img { box-shadow: 3px 3px 14px #666;} */
  & article pre {white-space: pre-wrap;}
  & span + em {margin: 1rem; padding: 10px; display:block; border-bottom: 1px solid #aaa; color: #444;}

  & p > code, & li > code {border:1px solid rgba(200,200,200, .4); padding:2px 4px; white-space: nowrap;}

aside > section {padding: .5rem; }
aside .tagsDiv {padding:.5rem; margin:1rem 0; background-color: #ffd;}
aside .tagsDiv ul {list-style-type:none; display:flex; padding-left:0;}
aside .tagsDiv ul a {display:block; margin: 0 1rem; padding:.5rem;}

  @media (min-width:900px) {
    flex-direction: row-reverse;
& aside {flex-basis: 22rem}
& article {flex:1; padding:1rem; width:calc(100vw - 24rem);  background-size:200px;}
}
@media (min-width:1300px) {
& article {width:calc(1300px - 24rem); }
}
`;

const LayoutBlog = ({ children, data, path }) => {

    let tagsArray
    if (data !== undefined) {
        const { frontmatter } = data
        tagsArray = [...frontmatter.tags.split(",")]
    }
    const headerTitle = `blog - strona główna`

    return (
        <div className="container">

            <StyledHeader>
                <HeaderStandard />
                <Link to="/blog"><h2>Blog</h2></Link>
            </StyledHeader>
            <StyledMain background={data ? data.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src : null}>
                <aside>
                     <section>
                     {path === "/blog/" || path === "/blog" ?  null :  <p><Link to="/blog">strona główna bloga</Link></p> }
                           <h3>Menu - serie wpisów</h3>
                            <ul>
                                <li><Link to="/blog/gatsby">Hello, Gatsby!</Link></li>
                                <li><Link to="/blog/enigma">Das ist Enigma</Link></li>
                                <li><Link to="/blog/webdev">Webdev everythink</Link></li>
                                {/* <li><Link to="/blog/secwar">sec.w@r</Link></li> */}
                            </ul>
                        </section>
                    {data === undefined ? null :
                        <>
                            <section>
                                <div className="tagsDiv">
                                    <h4>Tagi:</h4>
                                    <ul>{tagsArray.map(tag => <li key={tag}><Link to={`/blog/tag/${tag.trim()}`}>{tag.trim()}</Link></li>)}</ul>
                                </div>
                            </section>
                            <ToC />
                        </>
                    }
                </aside>
                <article className="content-container">
                    {children}
                </article>
            </StyledMain>
            <FooterStandard />
        </div>)
}

export default LayoutBlog