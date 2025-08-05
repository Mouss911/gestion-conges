const demandes = [
  { id: 1, type: 'Annuel', debut: '2025-08-01', fin: '2025-08-05', statut: 'Approuvé' },
  { id: 2, type: 'Maladie', debut: '2025-07-10', fin: '2025-07-11', statut: 'Rejeté' },
  { id: 3, type: 'Annuel', debut: '2025-08-10', fin: '2025-08-15', statut: 'En attente' },
];
const Historique = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Historique des demandes</h1>

      <table className="w-full table-auto bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Début</th>
            <th className="p-3 text-left">Fin</th>
            <th className="p-3 text-left">Statut</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map(d => (
            <tr key={d.id} className="border-t">
              <td className="p-3">{d.type}</td>
              <td className="p-3">{d.debut}</td>
              <td className="p-3">{d.fin}</td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded text-white 
                  ${d.statut === 'Approuvé' ? 'bg-green-600' : d.statut === 'Rejeté' ? 'bg-red-600' : 'bg-yellow-500'}`}>
                  {d.statut}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Historique
