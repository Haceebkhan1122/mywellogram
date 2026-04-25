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
                {widgets?.length > 0 && widgets?.map((item, index) => {
                    const { key_type } = item;
                    return renderWidget(key_type, item, index, false, pageName);
                })}
            </section>
        </>
    )
}

export default Home;
