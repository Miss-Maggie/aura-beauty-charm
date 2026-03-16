import Link from "next/link";
import { Trash2, Eye, RefreshCw } from "lucide-react";
const statusColors = {
  Confirmed: "bg-primary/10 text-primary",
  Pending: "bg-accent text-accent-foreground",
  Completed: "bg-secondary text-secondary-foreground",
  Cancelled: "bg-destructive/10 text-destructive",
};

const nextStatus = {
  Pending: "Confirmed",
  Confirmed: "Completed",
  Completed: "Confirmed",
  Cancelled: "Pending",
};

const BookingTable = ({ bookings, onDelete, onStatusChange }) => {
  if (bookings.length === 0) {
    return (
      <div className="text-center py-16 bg-card rounded-2xl shadow-card border border-border">
        <p className="text-muted-foreground">No bookings yet.</p>
        <Link href="/bookings/new" className="text-primary font-medium text-sm mt-2 inline-block hover:underline">
          Create your first booking →
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-card rounded-2xl border border-border shadow-card">
      <table className="w-full text-left border-collapse">
        <thead className="bg-muted/50 border-b border-border">
          <tr>
            {["Customer", "Service", "Date", "Time", "Status", ""].map((h) => (
              <th key={h} className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {bookings.map((b) => (
            <tr key={b._id} className="hover:bg-accent/30 transition-colors group">
              <td className="px-6 py-4 font-medium text-card-foreground">{b.customerName}</td>
              <td className="px-6 py-4 text-muted-foreground">{b.serviceId?.title || "N/A"}</td>
              <td className="px-6 py-4 tabular-nums text-muted-foreground">{b.date}</td>
              <td className="px-6 py-4 tabular-nums text-muted-foreground">{b.time}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[b.status]}`}>
                  {b.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/bookings/${b._id}`} className="p-1.5 rounded-lg hover:bg-accent text-primary transition-colors" title="View">
                    <Eye size={16} />
                  </Link>
                  <button
                    onClick={() => onStatusChange(b._id, nextStatus[b.status])}
                    className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground transition-colors"
                    title={`Change to ${nextStatus[b.status]}`}
                  >
                    <RefreshCw size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(b._id)}
                    className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;



