import Header from './Header'
import Container from './Container'
import Head from 'next/head'
import Footer from '../components/Footer'

const Layout = (props) => (
    <div>
        <Container>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i" rel="stylesheet"></link>
            </Head>
            <Header/>
            {props.children}
            <style global jsx>{`
            * {
                font-family: 'Lato', sans-serif;
            }
            body {
                margin: 0;
                padding: 0;
                background: #f7f9fc;
            }
        `}</style>
        </Container>
        <Footer/>
    </div>
)

export default Layout