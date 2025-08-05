import { useState } from 'react'

const DemandeConge = () => {
  const [type, setType] = useState('');
  const [debut, setDebut] = useState('');
  const [fin, setFin] = useState('');
  const [motif, setMotif] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appel API ici
    console.log({ type, debut, fin, motif });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Demande de congé</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-4">
        <div>
          <label className="block mb-1 font-medium">Type de congé</label>
          <select className="w-full border rounded px-3 py-2" value={type} onChange={e => setType(e.target.value)}>
            <option value="">Sélectionner</option>
            <option value="annuel">Annuel</option>
            <option value="maladie">Maladie</option>
            <option value="maternité">Maternité</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Date de début</label>
          <input type="date" className="w-full border rounded px-3 py-2" value={debut} onChange={e => setDebut(e.target.value)} />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date de fin</label>
          <input type="date" className="w-full border rounded px-3 py-2" value={fin} onChange={e => setFin(e.target.value)} />
        </div>

        <div>
          <label className="block mb-1 font-medium">Motif</label>
          <textarea className="w-full border rounded px-3 py-2" rows="3" value={motif} onChange={e => setMotif(e.target.value)} />
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Soumettre la demande
        </button>
      </form>
    </div>
  );
}

export default DemandeConge
