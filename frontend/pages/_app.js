import '../styles/globals.scss'
import MainContainer from '../components/MainContainer'

function MyApp({ Component, pageProps }) {
  return(
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  ) 
}

export default MyApp
