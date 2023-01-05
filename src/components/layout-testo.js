import * as React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

import "./layout.css"

const LayoutTemp = ({ children }) => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <h2>TESTO TESTO</h2>
                
                {children}</main>
            <Footer />
        </>)
}

export default LayoutTemp