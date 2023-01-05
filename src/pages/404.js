import * as React from 'react'
import Seo from "../components/seo"
import Layout from "../components/layout_page"

const NotFoundPage = () => {
    return (
        <Layout>
        <h1>NotFoundPage!</h1>
        </Layout>
    )
}
export default NotFoundPage

export function Head() { return ( <Seo title="404 strona nie została znaleziona" /> ) }