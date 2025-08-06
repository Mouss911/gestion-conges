import React from "react"
import { MdMoreHoriz } from "react-icons/md"
import { Button } from "./ui/button"

interface LeaveRecord {
  sno: number
  type: string
  from: string
  to: string
  days: string
  reason: string
  status: "Pending" | "Cancelled" | "Approved" | "Declined"
}

const leaveData: LeaveRecord[] = [
  {
    sno: 1,
    type: "Casual",
    from: "19 Feb 2020 - 9:00 AM",
    to: "19 Feb 2020 - 6:00 PM",
    days: "1 d",
    reason: "Friend's wedding celebration",
    status: "Pending",
  },
  {
    sno: 2,
    type: "Casual",
    from: "19 Feb 2020 - 9:00 AM",
    to: "19 Feb 2020 - 6:00 PM",
    days: "1 d",
    reason: "Friend's wedding celebration",
    status: "Cancelled",
  },
  {
    sno: 3,
    type: "Casual",
    from: "19 Feb 2020 - 9:00 AM",
    to: "19 Feb 2020 - 6:00 PM",
    days: "1 d",
    reason: "Friend's wedding celebration",
    status: "Approved",
  },
  {
    sno: 4,
    type: "Casual",
    from: "19 Feb 2020 - 9:00 AM",
    to: "19 Feb 2020 - 6:00 PM",
    days: "1 d",
    reason: "Friend's wedding celebration",
    status: "Declined",
  },
  {
    sno: 5,
    type: "Casual",
    from: "19 Feb 2020 - 9:00 AM",
    to: "19 Feb 2020 - 6:00 PM",
    days: "1 d",
    reason: "Friend's wedding celebration",
    status: "Pending",
  },
]

function StatusBadge({ status }: { status: LeaveRecord["status"] }) {
  const statusStyles = {
    Pending: "text-gray-600",
    Cancelled: "text-gray-400",
    Approved: "text-green-600",
    Declined: "text-blue-600",
  }

  return <span className={`font-medium ${statusStyles[status]}`}>{status}</span>
}

export function LeavesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SNo</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leaveData.map((record) => (
            <tr key={record.sno} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.sno}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.from}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.to}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.days}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.reason}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <StatusBadge status={record.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <Button variant="ghost" size="sm">
                  <MdMoreHoriz className="w-4 h-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
