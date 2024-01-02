import Head from 'next/head'
import Header from '../../components/Header'

export default function SingleBlog() {
    return (
        <>
            <Head>
                <title>
                    Blog spécifique
                </title>
            </Head>
            <Header />
            <h1>
                Blog spécifique
            </h1>
        </>
    )
}