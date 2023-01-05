import * as React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

import "./layout.css"

const LayoutTemp = ({ children, section, subsection }) => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <h2>TEMP</h2>
                
                <p>{section} / {subsection}</p>
                {children}</main>
            <Footer />
        </>)
}

export default LayoutTemp