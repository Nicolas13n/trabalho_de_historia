import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/header.jsx'
import GlobalStyle from './components/GlobalStyle/GlobalStyle.js'
import Section from './components/section/section.jsx'
import Main from './components/main/main.jsx';
import Cards from './components/card/card.jsx';
import Lista from './components/listaInf/lista.jsx'
import Trailer from './components/trailer/trailer.jsx'
import Footer from './components/footer/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Header />
    <Section />
    <Main />
    <Cards />
    <Lista />
    <Footer />
  </StrictMode>,
)
