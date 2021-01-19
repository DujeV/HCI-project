import React from "react"
import {Helmet} from "react-helmet"


const NotFoundPage = () => (
 <main>
        <Helmet>
        <title>404</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
   <h1>Page not found</h1>
 </main>
)

export default NotFoundPage
