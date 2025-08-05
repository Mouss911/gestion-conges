const soldes = [
  { type: 'Annuel', restant: 10 },
  { type: 'Maladie', restant: 5 },
  { type: 'Maternité', restant: 0 },
];
const SoldeConge = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Solde de congés</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {soldes.map((s, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold">{s.type}</h2>
            <p className={`text-2xl font-bold ${s.restant > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {s.restant} jours
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoldeConge
