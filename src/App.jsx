import { Routes, Route } from 'react-router-dom';
import LayoutEmploye from './components/LayoutEmploye';
import Dashboard from './pages/Dashboard';
import DemandeConge from './pages/DemandeConge';
import Historique from './pages/Historique';
import SoldeConge from './pages/SoldeConge';

const App = () => {
  return (
    <LayoutEmploye>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/demande" element={<DemandeConge />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/solde" element={<SoldeConge />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </LayoutEmploye>
  );
}

export default App