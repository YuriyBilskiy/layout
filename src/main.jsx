import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/not-found" element={<NotFoundPage/>} />

    </Routes>
  </BrowserRouter>
)
