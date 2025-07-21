import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes' // ajusta o caminho conforme seu projeto

function App() {
    return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
    
export default App;
