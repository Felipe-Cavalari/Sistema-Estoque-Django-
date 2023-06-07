import React from 'react'
import ReactDOM from 'react-dom/client'

//configurando o router no react
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

//Componentes do APP
import { Sidebar } from './components/Sidebar'
import { Home } from './components/Home'
import { Produtos } from './components/Produtos'

//Importando os estilos gerais
import './styles/global.css'
import { ErrorPage } from './components/ErrorPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Sidebar />
        
        <div className="pages">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/produtos' element={<Produtos/>} />

          {/* Rota para páginas 404  */}
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </div>

    </BrowserRouter>
  </React.StrictMode>,
)
