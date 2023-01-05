import * as React from 'react'
import { Link } from 'gatsby'
import Seo from "../components/seo"
import Layout from "../components/layout_page"

const AboutPagePage = () => {
  
    return (
        <Layout>
            
            <section className="section-meta">

                <h2>O stronie</h2>

                <p>Czym ma być ta witryna? Najkrótszą odpowiedzią jest, że..., hmm, w zasadzie wszystkim. Wszystkim w miarę możliwości i wszystkim po trochu. Jest to strona prywatna czyli są tu rzeczy, które ja uważam za interesujące i mogące być przydatne innym. Nie ma jakiejś konkretnej linii wiodącej. Stąd rozbicie na trzy niemające ze sobą związku części: turystyka, IT (dawniej mówiło się: webmastering) i tzw. "różne".</p>

                <p>Są to jednocześnie:</p>
                <ul>
                    <li>opublikowane notatki</li>
                    <li>przywrócenie mojej dawnej strony www</li>
                    <li>reklama</li>
                    <li>nawiązanie kontaktu</li>
                    <li>etc...</li>
                </ul>

                <p>W Turystyce dział niemiecki w opublikowanym zakresie jest kompletny, może dodam jakieś miasta, czy może zarys politycznej historii Niemiec, na pewno lepsze zdjęcia. Ale to co jest to i tak za dużo, kto ma tyle czasu, żeby to czytać. Mam pomysł na serię artykułów o Berlinie i Dreźnie ale to tylko jeśli będę miał czas, żeby je napisać. Może teraz pora na Budapeszt, Wiedeń, Pragę i Paryż. Póki co Praga i Czechy są w opracowaniu.</p>
                {/*<p>Instrukcje obiektów turystycznych będą powstawać stopniowo.</p>*/}
                <p>IT początkowo to były głównie Drupal, Mediawiki, WordPress i CSS. Do tego stara strona o XHTML i CSS2 oraz artykuł o kryptografii. Postanowiłem jednak całość czasu nauki przeznaczyć na JavaScript, React i Gatsby'ego. Dlatego część JS staje się najważniejsza.</p>
                <p>Dział trzeci, prywatny, jak widać z braku czasu składa się głównie z dwóch zestawów odnośników, które zebrałem lurkując na Facebooku grupy związane z językiem niemieckim (którego się uczę) i francuskim (którego chciałbym się zacząć uczyć).</p>
                <p>Ponadto:</p>

                <ul>
                    <li>Nie biorę odpowiedzialności za zastosowanie jakiejkolwiek zawartej tu informacji.</li>
                    <li>Jestem autorem całej treści tej witryny (chyba że wyraźnie zaznaczyłem że jest inaczej).</li>
                    <li>Użyłem zdjęć własnych, oznaczonych jako public domain, oraz starych map mających ponad 70 lat.</li>
                    <li>Starałem się nie naruszyć niczyich dóbr, jeśli jednak uważasz inaczej - proszę o kontakt.</li>
                </ul>

                <p>Pierwsza wersja powstała na Drupalu w 2018. Potem przeniosłem całą treść na Gatsby'ego (data instalacji na Netlify: 22 października 2020). Trochę w pośpiechu bo jednocześnie opuszczałem dawny hosting. Był to mój pierwszy poważniejszy kontakt z Gatsbym. W międzyczasie, od stycznia do maja 2021, przeniosłem na tę stronę cały blog wojenny Festung Breslau 1945.</p>

                <p>Trzecia wersja strony wylądowała na Netlify 5 lipca 2021. Także Gatsby, ale tym razem treść zawarta jest w plikach .mdx w jednym katalogu, a cała strona ma o wiele prostszą strukturę, co jest o wiele łatwiejsze do utrzymania i rozwoju. Ponadto nie ma global styles, zastosowanie stylów globalnych ma sens tylko w małych stronkach o jednolitym wyglądzie. Tutaj użyłem styled components.</p>

                <p>Pzy okazji uruchomiłem blog i do września 2021 wrzuciłem dwie serie wpisów: <Link to="/blog/gatsby">Hello, Gatsby!</Link> (oczywiście! 7 wpisów) oraz <Link to="/blog/enigma">Das ist Enigma</Link> (12 wpisów). Obie serie będą miały kontynuację.</p>

                <p>19 stycznia 2022 upgrade do czwartej wersji Gatsby'ego. Łatwe przeniesienie treści dzięki temu, że wszystko jest logicznie poukładane. Przy okazji ruszyła kolejna edycja bloga Festung Breslau 1945 z nowymi funkcjami.</p>

                <p>Styczeń 2023 Gatsby v5. Lepszy design i docelowo wymiana kodu na TypeScript.</p>

                <p>Co dalej?</p>

                <ul>
                    <li>Zróżnicowanie designu poszczególnych działów, lepsza organizacja treści.</li>
                    <li>Wdrożyć Web Accessibility.</li>
                    <li>UI, SEO, design, część ilustracyjna...</li>
                    <li>... treść, więcej treści, a lot of treść</li>
                </ul>
            </section>
       
        </Layout>
    )
}

export default AboutPagePage

export function Head() { return ( <Seo title="O stronie" /> ) }