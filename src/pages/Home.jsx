import { Suspense, useEffect, useState } from 'react'
import Header from "../layouts/header/header"
import { renderWidget } from '../utils/common'

function Home({ widgets }) {
    const [pageName, setPageName] = useState();

    useEffect(() => {
        setPageName(widgets?.slug)
    }, []);

    return (
        <>
            <Header />
            <section className='homePage'>
                <h1>Its AWS / Jenkins / Docker</h1>
            </section>
        </>
    )
}

export default Home;
