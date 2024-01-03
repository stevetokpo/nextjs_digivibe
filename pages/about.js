import Head from 'next/head'
import Header from '../components/Header'
import { useState } from 'react'

export default function About() {

    const [ n, setN ] = useState(0)

    const ag = () => {
        setN(prev => prev+1)
    }

    return (
        <>
            <Head>
                <title>
                    A propos
                </title>
            </Head>
            <Header />
            <h1>
                A propos
            </h1>
            <p>
                Commençons par {n}
            </p>
            <button onClick={() => ag()}>
                Augmenter
            </button>
        </>
    )
}