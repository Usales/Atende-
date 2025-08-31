import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header/Header'
import TelaInicial from './telas/TelaInicial/TelaInicial'
import TelaRespostas from './telas/TelaRespostas/TelaRespostas'
import TelaCriarRespostas from './telas/TelaCriarRespostas/TelaCriarRespostas'
import TelaExtensoes from './telas/TelaExtensoes/TelaExtensoes'
import TelaRede from './telas/TelaRede/TelaRede'
import TelaOperacional from './telas/TelaOperacional/TelaOperacional'
import TelaEmails from './telas/TelaEmails/TelaEmails'
import TelaSeguranca from './telas/TelaSeguranca/TelaSeguranca'
import TelaHardware from './telas/TelaHardware/TelaHardware'
import TelaSoftwares from './telas/TelaSoftwares/TelaSoftwares'
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
          <Route path="/rede" element={<TelaRede />} />
          <Route path="/operacional" element={<TelaOperacional />} />
          <Route path="/emails" element={<TelaEmails />} />
          <Route path="/seguranca" element={<TelaSeguranca />} />
          <Route path="/hardware" element={<TelaHardware />} />
          <Route path="/softwares" element={<TelaSoftwares />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App