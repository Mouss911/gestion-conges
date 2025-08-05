import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DemandeConge from './pages/DemandeConge';
import Historique from './pages/Historique';
import SoldeConge from './pages/SoldeConge';

const App = () => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/demande" element={<DemandeConge />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/solde" element={<SoldeConge />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App