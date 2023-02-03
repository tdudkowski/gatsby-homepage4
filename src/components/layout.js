import * as React from "react"
import LayoutTurystyka from "./layout-turystyka"
import LayoutIT from "./layout-it"
import LayoutMisc from "./layout-misc"
import LayoutCms from "./layout-cms"
import LayoutCss from "./layout-css"
import LayoutJs from "./layout-js"
import LayoutKryptologia from "./layout-kryptologia"
import LayoutWebAccessibility from "./layout-webaccessibility"
import LayoutErr from "./layout-err"
import "./layout.css"
import "./index.css"

const Layout = ({  children, section, subsection }) => {
  
    let Layout;

    switch (section) {
        case "turystyka":
            Layout = LayoutTurystyka
            break;
        case "turystyka/":
            Layout = LayoutTurystyka
            break;
        case "it":
            Layout = LayoutIT
            break;
        case "it/":
            Layout = LayoutIT
            break;
        case "misc":
            Layout = LayoutMisc
            break;
        case "misc/":
            Layout = LayoutMisc
            break;
        default:
            Layout = LayoutErr
    }

    switch (subsection) {
        case "css":
            Layout = LayoutCss
            break;
        case "cms":
            Layout = LayoutCms
            break;
        case "js":
            Layout = LayoutJs
            break;
        case "kryptologia":
            Layout = LayoutKryptologia
            break;
        case "web-accessibility":
            Layout = LayoutWebAccessibility
            break;
    }

    const headerTitle = `${section !== undefined ? section : " Strona główna"}`

    return (
        <div className="container">
            <Layout children={children} section={section} subsection={subsection} />
        </div>)
}

export default Layout