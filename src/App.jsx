import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header/Header'
import TelaInicial from './telas/TelaInicial/TelaInicial'
import TelaRespostas from './telas/TelaRespostas/TelaRespostas'
import TelaCriarRespostas from './telas/TelaCriarRespostas/TelaCriarRespostas'
import TelaExtensoes from './telas/TelaExtensoes/TelaExtensoes'
import Footer from './componentes/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/respostas" element={<TelaRespostas />} />
          <Route path="/criar-respostas" element={<TelaCriarRespostas />} />
          <Route path="/extensoes" element={<TelaExtensoes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App