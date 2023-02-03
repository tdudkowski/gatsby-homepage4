import * as React from "react"
import HeaderStandard from "./navigation"
import FooterStandard from "./footer-standard"

import "./layout.css"

const LayoutTemp = ({ children }) => {
    return (
        <>
            <header>
                <HeaderStandard />
            </header>
            <main>
                <h2>TESTO TESTO</h2>
                
                {children}</main>
            <FooterStandard />
        </>)
}

export default LayoutTemp