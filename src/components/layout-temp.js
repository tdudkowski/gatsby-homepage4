import * as React from "react"
import HeaderStandard from "./navigation"
import FooterStandard from "./footer-standard"

import "./layout.css"

const LayoutTemp = ({ children, section, subsection }) => {
    return (
        <>
            <header>
                <HeaderStandard />
            </header>
            <main>
                <h2>TEMP</h2>
                
                <p>{section} / {subsection}</p>
                {children}</main>
            <FooterStandard />
        </>)
}

export default LayoutTemp