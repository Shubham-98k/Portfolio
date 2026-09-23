import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageLayout from './components/layout/HomePageLayout.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
