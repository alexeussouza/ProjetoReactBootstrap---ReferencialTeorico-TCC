// routes.tsx
import { Routes, Route } from 'react-router-dom'
import Article001 from '../pages/articleca_001'
import Article002 from '../pages/articlecb_002'
import Article003 from '../pages/articlecc_003'
import Article004 from '../pages/articlecd_004'
import Home from '../pages/Home'

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/articleca_001" element={<Article001 />} />
      <Route path="/articlecb_002" element={<Article002 />} />
      <Route path="/articlecc_003" element={<Article003 />} />
      <Route path="/articlecd_004" element={<Article004 />} />
    </Routes>
  )
}

export default AppRoutes
