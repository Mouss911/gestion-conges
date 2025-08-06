import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { LeavesTable } from "../components/leaves-table"
import { Pagination } from "../components/pagination"
import { StatsCards } from "../components/stats-cards"

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [status, setStatus] = useState("")

  return (
    <>
    <StatsCards />
      <div className="bg-white mt-6 rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Leaves</h2>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">New Request</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Recherche</label>
            <Input
              placeholder="Leave Type or Reason"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <Input placeholder="dd / MMM / yyyy" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <Input placeholder="dd / MMM / yyyy" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <Select value={status} className="bg-white" onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Choisir un" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending"> En attente</SelectItem>
                <SelectItem value="approved">Approuvée</SelectItem>
                <SelectItem value="declined">Refusé</SelectItem>
                <SelectItem value="cancelled">Annulé</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end space-x-2">
            <Button variant="outline">Clear</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Filter</Button>
          </div>
        </div>
      </div>

      <LeavesTable />
      <Pagination />
    </div>
    </>
    
  )
}

export default Dashboard;
