import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomeSite from './sites/home/HomeSite'
import TapSite from './sites/tap/TapSite'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSite />} />
        <Route path="/tap/*" element={<TapSite />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
