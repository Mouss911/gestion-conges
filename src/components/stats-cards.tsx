import React from "react"

interface StatCardProps {
    number: string
    label: string
    sublabel: string
    color: "blue" | "purple" | "orange" | "red"
  }
  
  function StatCard({ number, label, sublabel, color }: StatCardProps) {
    const colorClasses = {
      blue: "text-blue-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      red: "text-red-600",
    }
  
    return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className={`text-3xl font-bold ${colorClasses[color]} mb-2`}>{number}</div>
        <div className="text-gray-900 font-medium">{label}</div>
        <div className="text-gray-500 text-sm">{sublabel}</div>
      </div>
    )
  }
  
  export function StatsCards() {
    const stats = [
      { number: "16", label: "invalide", sublabel: "congés", color: "blue" as const },
      { number: "08", label: "Précédente", sublabel: "congés inutilisées", color: "purple" as const },
      { number: "02", label: "Congés en attente", sublabel: "Demandes", color: "orange" as const },
      { number: "02", label: "Rejetée", sublabel: "Congés", color: "red" as const },
    ]
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    )
  }
  