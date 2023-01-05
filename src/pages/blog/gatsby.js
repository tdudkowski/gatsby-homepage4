import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../../components/seo";
import LayoutBlog from "../../components/layout-blog"
// import Seo from "../../components/seo"

const GatsbyBlog = ({ data, location }) => {
    const headerTitle = `dygresje.info / wpisy o Gatsbym`
    const path = location.pathname
    const { frontmatter } = data.allMdx.nodes[0];
    const { image } = frontmatter;

    return (<LayoutBlog path={path}>
        {/* <Seo title={headerTitle} image={image.childImageSharp.gatsbyImageData.images.fallback.src} /> */}
        
            <h3>Hello, Gatsby!</h3>

            <p>Bloga rozpoczynam serią wpisów o <a href="https://www.gatsbyjs.com/">Gatsbym</a>, popularnym i coraz popularniejszym frameworku Reacta.</p>

            <p>Zainteresowanym Gatsbym polecam:</p>

            <ul>
                <li>darmowy kurs Przeprogramowanych: <a href="https://przeprogramowani.pl/darmowy-kurs-gatsby">Gatsby - krok po kroku, od zera do gotowej aplikacji</a>, jest to seria, w tej chwili siedmiu artykułów, na pewno wartych przeczytania. Lektura obowiązkowa. Ponadto trzy wpisy na blogu Łukasza Zielińskiego <a href="https://lukasz-zielinski.pl/tags/gatsby-js/">3 post(ów) z tagiem “Gatsby.js”</a></li>
                <li>artykuł na mojej stronie: <Link to="/it/js/gatsby">GatsbyJS</Link>, choć, prawdę mówiąc, po wykasowaniu / przeniesieniu zdublowanej treści niewiele tam już pozostało.</li>
            </ul>

            <p>Wszystkie przedstawione tu rozwiązania sprawdziłem, nie jest to copypaste dokumentacji. Jednak żadnej gwarancji nie mogę udzielić, bo na pewno wkradło się tu trochę błędów. Będę wdzięczny za wskazanie ich i wszystkie tak szybko jak to będzie możliwe, poprawię. Kontakt przez formularz kontaktowy na stronie lub <a href="https://www.facebook.com/dygresje.info/">facebooka dygresje.info</a>.</p>

            <p>Innym rodzajem błędu, który mogłem tu popełnić, jest uznanie czegoś za zbyt oczywiste i pominięcie tego w opisie. Tutaj też proszę o zwrócenie uwagi.</p>

            <h3>Dotychczasowe wpisy</h3>

            <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                    <li key={id} background={frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}>
                        <Link to={`/blog${fields.slug}`}>{frontmatter.title}</Link> - <span>{frontmatter.description}</span>
                    </li>
                ))}
            </ul>

            <h3>Co dalej?</h3>

            <p>W lipcu i sierpniu 2021 w ciągu dwóch tygodni napisałem / dopracowałem siedem wpisów, które były już wcześniej w różnym stopniu gotowe, w tym dwa kompletnie od zera. To było interesujące, ale potem nastąpiły inne obowiązki, m.in. <Link to="/blog/enigma">ruszyłem z cyklem wpisów o Enigmie</Link>. Dlatego nastąpiła dłuższa przerwa.</p>
            
            <p>Teraz w maju 2022 dodałem wpis o menu i w tym roku pojawią się kolejne wpisy, które jak sądzę zamkną ten cykl aż do czasu kiedy / jeśli w architekturze Gatsby'ego pojawia się poważne zmiany.</p>

            <p>Plan jest dość płynny, ale na tę chwilę przedstawia się następująco:</p>

            <ul>
                <li>Blog cz. 2: chmura tagów, paginacja, poprzedni / następny, automatyczna publikacja danego dnia, komentarze...</li>
                <li>Headless CMS: Wordpress, Drupal, Strapi i inne.</li>
                <li>Integracje, szablony, PWA, SSR itp. itd.</li>
            </ul>

            <p>Docelowo powinno wyjść około 12 wpisów i w tej formule seria powinna się zamknąć do jesieni 2022. Oczywiście w miarę rozwoju Gatsby'ego będą się pojawiać nowości i dopóki będę zainteresowany tym frameworkiem, treść będzie aktualizowana.</p>

            <p>Możliwe, że z czasem będę przenosił treść z wpisu do wpisu; może w ogóle inaczej to zorganizuję. Więc wszystko może się zmienić, ale w razie gdyby jakaś informacja zniknęła z dotychczasowego miejsca - ten adres: `https://dygresje.info/blog/gatsby` zostaje i nie ulegnie zmianie.</p>

            <h3>Założenia</h3>

            <p>Co zaś do formuły treści: mnie najbardziej interesuje nie teoria, a konkretny sposób budowania rzeczy. Więcej się nauczyłem z analizy kodu niż kilobajtów dokumentacji (ma to też wiele wad, więc nie zalecam; niech każdy robi tak jak lubi/chce/musi, w tej kolejności). Dlatego często jest to prezentacja większych fragmentów kodu z kilkoma ważnymi elementami i w miarę dokładnym opisem tego, co się tam dzieje. Uważam, że jest to szybsze niż składanie działającej maszyny z drobnych porozrzucanych po całym artykule kawałków. Mając od razu działający kod szybko można przejść do eksperymentów i łatwiej zapamiętać to, co się udało zrozumieć.</p>

            <p>Założeniem każdego odcinka serii jest bycie success-complete, chodzi o to, żeby po przeczytaniu można było coś zbudować. Już w pierwszym odcinku zobaczysz własną stronę w Gatsbym.</p>

            <p>Zakładam, że czytelnik dobrze zna podstawy JS, rozumie jak działa React i zna <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>, używa gita, umie poruszać się w konsoli i wie, jak działa strona WWW. Pisząc o konsoli, mam na myśli konsolę linuksową i naprawdę tylko podstawowe polecenia typu cd, mkdir, rm, ls.</p>

            <p>Postaram się też odróżniać, kiedy używamy mechanizmów Gatsby'ego, kiedy samego Reacta, a kiedy jest to sam JS.</p>

    </LayoutBlog >)
}

export default GatsbyBlog

export function Head() { 
    
    return ( <Seo title="Hello, Gatsby!" /> ) }

export const query = graphql`
        query AllGatsbyBlogPosts {
            allMdx(
                filter: {internal: {contentFilePath: {glob: "**/src/content/blogposts/*.mdx"}}, frontmatter : {set : {eq: "gatsby" } } },
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