import * as React from "react"
import HeaderStandard from "./header-standard"
import FooterStandard from "./footer-standard"

import "./layout.css"

const Layout = ({ children, section }) => {
    return (
        <>
            <header>
                <HeaderStandard />
            </header>
            <main>
                {/* <h2>ERR</h2> */}
                {children}</main>
            <FooterStandard />
        </>)
}

export default Layout