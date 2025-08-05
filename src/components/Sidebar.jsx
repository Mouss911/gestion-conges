import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiClock, FiList, FiLogOut, FiBookOpen } from 'react-icons/fi';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-screen w-64 bg-blue-800 text-white flex flex-col fixed">
      <div className="p-6 text-center font-bold text-xl border-b border-blue-600">
        Espace Employé
      </div>

      <nav className="flex-1 px-4 py-6 space-y-4">
        <Link to="/dashboard" className={`flex items-center space-x-3 p-2 rounded ${isActive('/dashboard') ? 'bg-blue-600' : 'hover:bg-blue-700'}`}>
          <FiHome /> <span>Dashboard</span>
        </Link>
        <Link to="/demande" className={`flex items-center space-x-3 p-2 rounded ${isActive('/demande') ? 'bg-blue-600' : 'hover:bg-blue-700'}`}>
          <FiClock /> <span>Demander congé</span>
        </Link>
        <Link to="/historique" className={`flex items-center space-x-3 p-2 rounded ${isActive('/historique') ? 'bg-blue-600' : 'hover:bg-blue-700'}`}>
          <FiList /> <span>Historique</span>
        </Link>
        <Link to="/solde" className={`flex items-center space-x-3 p-2 rounded ${isActive('/solde') ? 'bg-blue-600' : 'hover:bg-blue-700'}`}>
          <FiBookOpen /> <span>Solde de congé</span>
        </Link>
      </nav>

      <div className="px-4 py-4 border-t border-blue-600">
        <button className="flex items-center space-x-2 w-full p-2 hover:bg-red-600 rounded cursor-pointer">
          <FiLogOut /> <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
