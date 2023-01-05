import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../../components/seo";
import LayoutBlog from "../../components/layout-blog"
import backgroundImage from "../../content/blogimages/Enigma-logo.jpg"

const GatsbyBlog = ({ data, location }) => {
    const headerTitle = `dygresje.info / wpisy o Gatsbym`
    const path = location.pathname
    // const { frontmatter } = data.allMdx.nodes[0];

    return (<LayoutBlog path={path}>
        {/* <Seo title={headerTitle} image={backgroundImage} /> */}
        
                    <h3>Das ist Enigma</h3>

            <p>Druga seria wpisów na dotyczy niemieckiej maszyny szyfrującej Enigma. Chciałem wyjaśnić kontekst w jakim powstała i jakie miała znaczenie i cóż... część historyczna zamieniła się w opracowanie historii kryptologii większej części XX wieku. W rezultacie główny temat serii - Enigma - nieco zeszła z pierwszego planu.</p>

            <p>Nic to jednak nie szkodzi. Enigmy nie jest mniej, po prostu reszty jest więcej. Tytuł serii jest dość uniwersalny i pasuje do kryptologii zawsze, niezależnie od tego ile jest Enigmy w Enigmie. A tej będzie tu wystarczająca ilość.</p>

            <p>Seria wpisów o Enigmie ma dwa komponenty:</p>

            <ul>
                <li>historyczny - omówienie w kontekście historycznym, od czasów Wielkiej Wojny</li>
                <li>programistyczny - opis techniczny i rekonstrukcja w JavaScripcie</li>
            </ul>

            <p>Oprócz wymienionych poniżej wpisów:</p>

            <ul>
                <li>Rekonstrukcja Enigmy - <a href="https://tdudkowski.github.io/Enigma/">Enigma I (1930-45)</a> - sedno części programistycznej, działający i w pełni zgodny z maszyną symulator Enigmy.</li>
                <li>Zainteresowanych kryptologią zapraszam do lektury artykułu na tej stronie: <Link to="/it/kryptologia">Kryptologia praktycznie</Link></li>
            </ul>

            <h3>Wpisy</h3>

            <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                    <li key={id} background={frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}>
                        <Link to={`/blog${fields.slug}`}>{frontmatter.title}</Link> - <span>{frontmatter.description}</span>
                    </li>
                ))}
            </ul>

            <h3>Co dalej?</h3>

            <p>Część historyczna jest już w zasadzie zamknięta. Starałem się zrobić ją jak najdokładniej, ale na pewno są tam błędy i jeszcze więcej niedopowiedzeń. To wynik kompromisu i decyzji, że lepsza jest spóźniona względem planu publikacja, niż przygotowanie materiału doskonałego i zwlekanie z publikacją ad calendas Graecas (taki los spotkał - jak dotąd - mój plan <a href="https://github.com/tdudkowski/t4">strony o Akcji T4</a>). Wpisy te będę poprawiał na bieżąco. W razie potrzeby poprawy błędów - kontakt przez formularz kontaktowy na stronie lub <a href="https://www.facebook.com/dygresje.info/">facebooka dygresje.info</a>.</p>

            <p>Możliwe, że jeszcze pojawi się, wyliczenie ważniejszych operacji wojennych, w których dane kryptoanalityczne odegrały, lub mogły odegrać ważną rolę. Czy decydującą, to już jest sfera spekulacji, historii alternatywnej i pomijania innych danych wywiadowczych, oraz wielu innych czynników. Choć w kilku przypadkach to właśnie dane z dekryptażu stały się podstawą takich, a nie innych decyzji sztabu i tu przede wszystkim trzeba wymienić fiasko ofensywy wiosennej w 1918, bitwę warszawską, bitwę o Atlantyk czy bitwę o Midway. To jest jednak long-time project i wymaga przejrzenia masy źródeł.</p>

            <p>Część programistyczna również jest prawie zakończona. Pozostaje jeszcze:</p>

            <ul>
                <li>napisać komponent Reacta</li>
                <li>dodać inne wersje Enigmy</li>
            </ul>

            <p>Bagatela LOL. Kiedy? Mam nadzieję, że jeszcze w 2022.</p>

    </LayoutBlog >)
}
//^.(\bgatsby\b)?.$
export default GatsbyBlog

export function Head() { 
    
    return ( <Seo title="Das ist Enigma" /> ) }

export const query = graphql`
        query AllEnigmaBlogPosts {
            allMdx(
                filter: {internal: {contentFilePath: {glob: "**/src/content/blogposts/*.mdx"}}, frontmatter : {set : {eq: "enigma" } } },
                sort: {frontmatter: {date: ASC} }
        ) {
            nodes {
            fields {
                slug
            }
            frontmatter {
            title
            section
        subsection
        description
        tags
        image {
            childImageSharp {
            gatsbyImageData(
                width: 200
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
                }
              }
                     }        
        id
        body
        }
      }
    }
        `;