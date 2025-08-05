import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Congés disponibles</h2>
          <p className="text-3xl font-bold text-green-600">12 jours</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Dernière demande</h2>
          <p>Congé annuel du 10/08 au 15/08 - <span className="text-yellow-600">En attente</span></p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-center">
          <Link to="/demande" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Faire une demande
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
