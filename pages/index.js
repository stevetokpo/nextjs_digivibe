import Head from 'next/head'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {

    const [ nombre, IncrementNombre ] = useState(1)
    const [datas, setDatas] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const doIncrement = () => {
        IncrementNombre(prev => prev + 1)
    }

    useEffect(() => {
        const requete = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:2001/images');
                setDatas(response.data.url);
            } catch (err) {
                setError('Erreur lors de la requête au serveur');
            } finally {
                setLoading(false);
            }
        }
        requete();
    }, [])

    return (
        <>
            <Head>
                <title>
                    Accueil
                </title>
            </Head>
            <Header />
            <h1>
                <span className="material-icons">home</span> Accueil
            </h1><br />
            <p>
                Le nombre actuellement est à: <b>{nombre}</b>.
            </p>
            <button onClick={() => doIncrement()}>
                Incrementer
            </button>
            <div>
                {loading ? (
                    <p>Chargement...</p>
                ) : error ? (
                    <p>Erreur: {error}</p>
                ) : datas ? (
                    <img src={datas} alt="Chargée depuis le serveur" />
                ) : null}
            </div>
        </>
    )
}