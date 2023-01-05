import * as React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ children, section }) => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <h2>ERR</h2>
                {children}</main>
            <Footer />
        </>)
}

export default Layout