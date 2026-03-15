import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { api, type Booking } from "@/lib/bookingStore";
import { toast } from "@/hooks/use-toast";

const statuses: Booking["status"][] = ["Pending", "Confirmed", "Completed", "Cancelled"];

const statusColors: Record<Booking["status"], string> = {
  Confirmed: "bg-primary/10 text-primary border-primary/20",
  Pending: "bg-accent text-accent-foreground border-border",
  Completed: "bg-secondary text-secondary-foreground border-border",
  Cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};

const BookingDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    api.getBooking(id).then((b) => {
      setBooking(b || null);
      setLoading(false);
    });
  }, [id]);

  const handleStatusUpdate = async (status: Booking["status"]) => {
    if (!id) return;
    await api.updateBooking(id, { status });
    setBooking((prev) => (prev ? { ...prev, status } : prev));
    toast({ title: "Status updated", description: `Changed to ${status}` });
  };

  const handleDelete = async () => {
    if (!id) return;
    await api.deleteBooking(id);
    toast({ title: "Booking deleted" });
    navigate("/bookings");
  };

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Loading...</div>;
  if (!booking) return <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Booking not found</div>;

  const details = [
    { label: "Customer", value: booking.name },
    { label: "Phone", value: booking.phone },
    { label: "Service", value: booking.service },
    { label: "Date", value: booking.date },
    { label: "Time", value: booking.time },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/bookings" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to bookings
          </Link>

          <div className="bg-card rounded-3xl shadow-elevated p-10">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-semibold tracking-tight text-card-foreground">Booking Details</h1>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusColors[booking.status]}`}>
                {booking.status}
              </span>
            </div>

            <div className="space-y-4 mb-10">
              {details.map((d) => (
                <div key={d.label} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground">{d.label}</span>
                  <span className="text-sm font-medium text-card-foreground tabular-nums">{d.value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">Update Status</p>
              <div className="flex flex-wrap gap-2">
                {statuses.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStatusUpdate(s)}
                    disabled={booking.status === s}
                    className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ${
                      booking.status === s
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-card-foreground border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={handleDelete}
                  className="text-sm text-destructive hover:underline transition-colors"
                >
                  Delete this booking
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingDetails;
